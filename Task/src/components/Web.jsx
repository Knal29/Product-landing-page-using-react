const Web = () => {
    return (
        <div>
            <section id="home">
                <h1 className="h-primary">Welcome to Sneakpeak</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorum numquam minus. </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <button className="btn">Order Now</button>
            </section>
            <section id="Features">
                <h1 className="h-primary center">Features</h1>
                <div id="features">
                    <div className="box">
                        <img src="/images/breathable.png" alt="" />
                        <h2 className="h-secondary center">Breathable</h2>
                        <p className="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui, repudiandae similique nam,
                            recusandae quidem ab asperiores ex, aut fugit labore veritatis facere?
                            sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                            voluptas beatae facilis labore, omnis sint quae eum.</p>
                    </div>
                    <div className="box">
                <img src="/images/rubber.png" alt=""/>
                <h2 className="h-secondary center">Rubber soles</h2>
                <p className="center">Our Sneakers typically have rubber soles with enhanced traction, designed for various
                    sports and activities. Unde numquam odit repudiandae perferendis nisi.

                    sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                    voluptas beatae facilis labore, omnis sint quae eum.</p>
            </div>
            <div className="box">
                <img src="/images/arch2.png" alt=""/>
                <h2 className="h-secondary center">Arch support</h2>
                <p className="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident fugiat aliquam
                    minima at explicabo. Earum eveniet quaerat, sunt molestias nesciunt quas! Quis.
                    sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                    voluptas beatae facilis labore, omnis sint quae eum.</p>
            </div>
                </div>
            </section>
            
    <section id="pricing">
        <h1 className="h-primary center">Pricing</h1>
        <div className="pricing-table" id="pricing">
            <div className="plan basic">
                <h3>Basic</h3>
                <p>Starting @ Rs.799</p>
                <ul>
                    <li>Daily use sneakers</li>
                    <li> Comfortable</li>
                    <li>No priority customer support</li>
                </ul>
                <a href="#" className="btn">Buy Now</a>
            </div>
            <div className="plan standard popular">
                <h3>Standard</h3>
                <p>Starting @ Rs.1999</p>
                <ul>
                    <li>Party Wear and stylish</li>
                    <li>Durable and more comfy</li>
                    <li>Prioritized customer support</li>
                </ul>
                <a href="#" class="btn">Buy Now</a>
            </div>
            <div className="plan premium">
                <h3>Premium</h3>
                <p>Starting @ Rs.6999</p>
                <ul>
                    <li>Premium Sneaks</li>
                    <li>Rich look and very comfy</li>
                    <li>Prioritized customer support</li>

                </ul>
                <a href="#" className="btn">Buy Now</a>
            </div>
        </div>
    </section>

   


        </div>
    );
};
export default Web