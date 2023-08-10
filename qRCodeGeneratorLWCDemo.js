import { LightningElement } from 'lwc';

export default class QRCodeGeneratorLWCDemo extends LightningElement {
//http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100
    imgSrc=''
    handleClick(){
        let QRURL = 'http://api.qrserver.com/v1/create-qr-code/';
        const element = this.refs.input_lightning.value;
        console.log('QR Input Element:::',element)

        fetch(QRURL+`?data=${encodeURIComponent(element)}!&size=100x100`)
        .then(response => response.blob())
        .then(blob => {
               return new Promise((resolve) => {
                const fileReader = new FileReader();
                fileReader.onload = () => resolve(fileReader.result);
                fileReader.readAsDataURL(blob);
               });
        } )
        .then(image => {
            this.imgSrc=image 
        })

    }
}
