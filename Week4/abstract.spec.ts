import { test } from '@playwright/test';

test('Abstract Class Example', async () => {

    interface Payments {
        cashOnDelivery(): void;
        upiPayments(): void;
        cardPayments(): void;
        internetBanking(): void;
    }

    abstract class CanaraBank implements Payments {
        abstract cashOnDelivery(): void;
        abstract upiPayments(): void;
        abstract cardPayments(): void;
        abstract internetBanking(): void;

        recordPaymentDetails(): void {
            console.log('Recording payment details in Canara Bank.');
        }
    }

    class Amazon extends CanaraBank {
        cashOnDelivery(): void {
            console.log('Cash on Delivery');
        }

        upiPayments(): void {
            console.log('UPI Payment');
        }

        cardPayments(): void {
            console.log('Card Payment');
        }

        internetBanking(): void {
            console.log('Internet Banking');
        }
    }

    const amazon = new Amazon();

    amazon.cashOnDelivery();
    amazon.upiPayments();
    amazon.cardPayments();
    amazon.internetBanking();
    amazon.recordPaymentDetails();

});