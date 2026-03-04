import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const checkUser = async () => {
      console.log('🚧 checkUser start');
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        console.log('🚧 checkUser result', session);

        if (error) {
          console.error('Supabase session error:', error.message);
          setLoading(false);
          return;
        }
        
        if (session?.user) {
          setUser({
            ...session.user,
            role: 'student',
            name: session.user.email
          });
          console.log('User session loaded:', session.user.email);
        } else {
          console.log('No active session found');
        }
      } catch (error) {
        console.error('Error checking user session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser({
          ...session.user,
          role: 'student',
          name: session.user.email
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      console.log('🚧 login() called for', email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      console.log('🚧 signInPromise resolved:', { data, error });

      if (error) {
        setLoading(false);
        return { success: false, message: error.message };
      }

      // Try to get role from users table
      let role = 'student';
      try {
        console.log('Fetching role for user ID:', data.user.id);
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('role')
          .eq('id', data.user.id)
          .single();

        console.log('User data from table:', userData, 'Error:', userError);

        if (!userError && userData) {
          role = userData.role || 'student';
          console.log('🚧 Role from users table:', role);
        }
      } catch (err) {
        console.error('Error fetching role:', err.message);
      }

      const userInfo = {
        ...data.user,
        role: role,
        name: data.user.email
      };
      
      console.log('✅ Login successful for:', email, 'Role:', role);
      
      setUser(userInfo);
      setLoading(false);
      
      return { success: true, user: userInfo };
    } catch (error) {
      console.error('❌ Login error:', error.message);
      setLoading(false);
      return { success: false, message: error.message };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name
          }
        }
      });

      if (error) {
        return { success: false, message: error.message };
      }

      // Create user record with default role
      if (data.user) {
        const { error: userError } = await supabase
          .from('users')
          .insert([
            {
              id: data.user.id,
              name: name,
              email: email,
              role: 'student'
            }
          ]);

        if (userError) {
          console.error('Error creating user:', userError);
        }
      }

      return { success: true, message: 'Signup successful! Please check your email to verify.' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      if (error && error.message && error.message.includes('NavigatorLockAcquireTimeoutError')) {
        console.warn('Logout lock timeout, continuing.');
        setUser(null);
      } else {
        console.error('Error logging out:', error);
      }
    }
  };

  // Function to update user role (for admin use)
  const updateUserRole = async (userId, newRole) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) {
        return { success: false, message: error.message };
      }

      // Update current user if it's the same user
      if (user?.id === userId) {
        setUser({ ...user, role: newRole });
      }

      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUserRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

