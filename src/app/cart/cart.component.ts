import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    products = [
      {
        prodName:"Samsung Galaxy A34",
        src:"https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2023/12/Samsung-Galaxy-A34-Dual-Sim-128GB-8GB-Ram-5GEGY_3147_2.png",
        descript:" 6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display 48MP + 8MP + 5MP | 13MP Front Camera",
        price:"2350",
      },
      {
        prodName:"APPLE MACBOOK PRO 13.3 LAPTOP APPLE M1 CHIP 8GB MEMORY 256GB SSD SILVER MYDA2LL/A        ",
        src:"https://cairosales.com/74364-large_default/apple-macbook-pro-133-laptop-apple-m1-chip-8gb-memory-256gb-ssd-silver-myda2lla.jpg",
        descript:"The Apple M1 chip redefines the 13-inch MacBook Pro. ",
        price:"4500",
      },
      
      {
        prodName:"Apple 8K Professional Camera: A Concept        ",
        src:"https://i0.wp.com/ymcinema.com/wp-content/uploads/2022/01/Apple-8K-Professional-Camera-A-Concept-.004.jpeg",
        descript:"This concept was created by ADR Studio Design and revealed by PetaPixel. First, it must be noted that this is a fictional camera",
        price:"9580",
      },
      
      
      {
        prodName:"Samsung 32 Inch Full HD Smart LED TV with Built-in Receiver - Black - UA32T5300AUXEG        ",
        src:"https://m.media-amazon.com/images/I/71iOlIb-3FL._AC_SX679_.jpg",
        descript:"This concept was created by ADR Studio Design and revealed by PetaPixel. First, it must be noted that this is a fictional camera",
        price:"9580",
      },
      
      
      {
        prodName:"Apple iPhone 13, 128GB, 4GB RAM, 5G - Blue        ",
        src:"https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/22b1bed05f04d71c4a848d770186c3c4/a/p/apple-iphone-128gb-4gb-5g-blue_1.jpg",
        descript:"128GB/256GB/512GB storage, no card slot | 12MP TrueDepth Front Camera        ",
        price:"43,499",
      },
      {
        prodName:"Apple iPhone 13, 128GB, 4GB RAM, 5G - Blue        ",
        src:"https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/22b1bed05f04d71c4a848d770186c3c4/a/p/apple-iphone-128gb-4gb-5g-blue_1.jpg",
        descript:"128GB/256GB/512GB storage, no card slot | 12MP TrueDepth Front Camera        ",
        price:"43,499",
      },
      {
        prodName:"Samsung Galaxy A34",
        src:"https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2023/12/Samsung-Galaxy-A34-Dual-Sim-128GB-8GB-Ram-5GEGY_3147_2.png",
        descript:" 6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display 48MP + 8MP + 5MP | 13MP Front Camera",
        price:"2350",
      },
      {
        prodName:"Apple iPhone 13, 128GB, 4GB RAM, 5G - Blue        ",
        src:"https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/22b1bed05f04d71c4a848d770186c3c4/a/p/apple-iphone-128gb-4gb-5g-blue_1.jpg",
        descript:"128GB/256GB/512GB storage, no card slot | 12MP TrueDepth Front Camera        ",
        price:"43,499",
      },
      {
        prodName:"Samsung Galaxy A34",
        src:"https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2023/12/Samsung-Galaxy-A34-Dual-Sim-128GB-8GB-Ram-5GEGY_3147_2.png",
        descript:" 6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display 48MP + 8MP + 5MP | 13MP Front Camera",
        price:"2350",
      },
      
      {
        prodName:"Apple 8K Professional Camera: A Concept        ",
        src:"https://i0.wp.com/ymcinema.com/wp-content/uploads/2022/01/Apple-8K-Professional-Camera-A-Concept-.004.jpeg",
        descript:"This concept was created by ADR Studio Design and revealed by PetaPixel. First, it must be noted that this is a fictional camera",
        price:"9580",
      },
      {
        prodName:"Apple iPhone 13, 128GB, 4GB RAM, 5G - Blue        ",
        src:"https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/22b1bed05f04d71c4a848d770186c3c4/a/p/apple-iphone-128gb-4gb-5g-blue_1.jpg",
        descript:"128GB/256GB/512GB storage, no card slot | 12MP TrueDepth Front Camera        ",
        price:"43,499",
      }

    ]
    prodName!:string;
    prodsrc!:string;
    proddescript!:string;
    prodprice!:string;

    pushdata = ()=>{
      this.products.push({ prodName: this.prodName, src: this.prodsrc, descript: this.proddescript, price: this.prodprice })
      console.log(this.prodName)
    }


    deleteProduct = (productid:any)=>{
      let elemen = this.products.indexOf(productid)
      console.log(elemen)
      this.products.splice(elemen , 1)
    }
}
