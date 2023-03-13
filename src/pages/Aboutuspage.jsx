import React from "react";
import Header from "../components/Header";
import "./Aboutuspage.css";

function Aboutuspage() {
  return (
    <div className="container">
      <Header />
      <div className="tekstas">
        <h1>Pavadinimas pavadinimas</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores accusamus dolorum. Error temporibus, numquam repellendus possimus excepturi eius quae cupiditate quibusdam alias ratione expedita voluptas optio harum officiis qui laudantium distinctio neque, in sint est accusantium saepe adipisci labore. </p>
        <p>Libero reprehenderit ullam quibusdam, eius dolorem enim iure iusto corporis!
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores neque animi libero, saepe dolores fuga, aliquam eaque cum facilis natus, fugiat accusamus! Doloremque dignissimos beatae vitae numquam perferendis nihil, quia blanditiis quidem quisquam quibusdam earum modi suscipit illo veritatis expedita neque sit? Consectetur omnis fugit facere cum obcaecati accusamus.</p> 
        <p>
        Recusandae autem eum voluptatem laborum doloribus maxime libero ab. Temporibus earum sit ullam harum exercitationem ipsum doloribus non nulla explicabo iure, vel delectus quo reiciendis, tempora repellendus aliquid consectetur ut nam, autem consequuntur! 
        </p>
        <h2>Mažesnio skyrelio pavadinimas</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores accusamus dolorum. Error temporibus, numquam repellendus possimus excepturi eius quae cupiditate quibusdam alias ratione expedita voluptas optio harum officiis qui laudantium distinctio neque, in sint est accusantium saepe adipisci labore. Libero reprehenderit ullam quibusdam, eius dolorem enim iure iusto corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores neque animi libero, saepe dolores fuga, aliquam eaque cum facilis natus, fugiat accusamus! Doloremque dignissimos beatae vitae numquam perferendis nihil, quia blanditiis quidem quisquam quibusdam earum modi suscipit illo veritatis expedita neque sit? </p>
        <p>
          Consectetur omnis fugit facere cum obcaecati accusamus. Recusandae autem eum voluptatem laborum doloribus maxime libero ab. Temporibus earum sit ullam harum exercitationem ipsum doloribus non nulla explicabo iure, vel delectus quo reiciendis, tempora repellendus aliquid consectetur ut nam, autem consequuntur! </p>
        <p>
          Ea laborum alias ipsa quas sapiente, commodi animi porro deserunt sit provident iusto, voluptate quibusdam ex sint!
        </p>
        <h2>Baigiamojo skyrelio pavadinimas</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>
        Magni asperiores accusamus dolorum. Error temporibus, numquam repellendus possimus excepturi eius quae cupiditate quibusdam alias ratione expedita voluptas optio harum officiis qui laudantium distinctio neque, in sint est accusantium saepe adipisci labore.
        </p>
        <h1 className="visit">You find us here:</h1>
        <h1 className="visit">Adreso g. 2-5, Adresas</h1>
        <iframe
          className="map"
          title="1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.299509313232!2d25.288455115889416!3d54.68675688028179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb7ad7bd9!2sArsenalo%20g.%205%2C%2001143%20Vilnius%2C%20Lietuva!5e0!3m2!1slt!2sit!4v1671178356716!5m2!1slt!2sit"
        ></iframe>
      </div>
    </div>
  );
}

export default Aboutuspage;