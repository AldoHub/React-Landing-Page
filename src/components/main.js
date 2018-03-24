import React, { Component } from 'react';
class Main extends Component {
  render() {
    return (
      <main>
          <h2 className="subtitle">Lorem ipsum</h2>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus justo. Vestibulum id feugiat risus. Proin interdum euismod nisl, in pellentesque urna iaculis non. Nulla facilisi. Morbi odio lectus, venenatis at libero bibendum, porttitor dapibus nibh. Sed eget risus bibendum, rutrum ex non, fermentum enim. Etiam viverra dui et metus sollicitudin eleifend.</p>
         
         <div className="cards-container">
            <div className="card-left">
                <img src="./assets/payment-credit-cards.png" />
                <p className="title">Donec id auctor elit</p>
                <p>Donec id auctor elit, ut consectetur magna. Duis posuere maximus erat a feugiat. Pellentesque magna enim, mollis non dui vel, maximus semper ipsum. Pellentesque dolor metus, dictum ut scelerisque nec, pretium vel arcu.</p>
            </div>
            
            <div className="card-right">
                <img src="./assets/online-shop-flat.png" />
                <p className="title"> Aenean tincidunt</p>
                <p>Curabitur at condimentum felis, eu sollicitudin turpis. Proin nec rhoncus nunc. Pellentesque eget velit nec magna viverra porttitor. Aenean tincidunt ipsum sit amet lorem pulvinar convallis. Nullam quis ultrices libero.</p>
            </div>
         </div>

         <h2 className="subtitle">Curabitur risus massa</h2>
        <div className="floats-container trigger">
           
                <img src="./assets/shopping-bags.png" />
                <p>Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>
              
        </div>     
           
        
        <div className="floats-container-reverse">
                <img className="c" src="./assets/shop.png" />
                <p className="d">Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>
           
        </div>


        <div className="floats-container">
           
                <img src="./assets/fast-delivery.png" />
                <p>Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>
               
        </div>       

      

        <div>
            <p className="title-last">Orci varius natoque penatibus et magnis dis parturient montes.</p>
            <button className="sign-up" type="button">Pre-Sign Now</button>
        </div>
       

         <footer>
            <ul>
                <li><a href="#"> &copy; aldocaava</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
               
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i className="fab fa-google-play"></i></a></li>
            </ul>
         </footer>
      </main>
    );
  }
}

export default Main;
