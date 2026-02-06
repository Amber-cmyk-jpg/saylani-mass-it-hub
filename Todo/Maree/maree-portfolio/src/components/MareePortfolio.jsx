const items = [
  {
    title: "Main Home",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/Landing-img-30-1.jpg",
  },
  {
    title: "Floating Portfolio",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/Landing-img-31-1.jpg",
  },
  {
    title: "Portfolio Pinterest",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/Landing-img-32.jpg",
  },
  {
    title: "Animated Slider",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/Landing-img-33.jpg",
  },
  {
    title: "Portfolio Metro",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/Landing-img-34.jpg",
  },
  {
    title: "Portfolio Gallery",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/Landing-img-35.jpg",
  },
  {
    title: "Interactive Links",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/landing-img-39.jpg",
  },
  {
    title: "Split Slider Showcase",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/landing-img-38.jpg",
  },
  {
    title: "Portfolio Carousel",
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/07/port-carousel-long.jpg",
  },
];

export default function MareePortfolio() {
  return (
    <section className="maree-portfolio">
      <div className="maree-grid">
        {items.map((item, i) => (
          <div className="maree-card" key={i}>
            <div className="maree-img">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
