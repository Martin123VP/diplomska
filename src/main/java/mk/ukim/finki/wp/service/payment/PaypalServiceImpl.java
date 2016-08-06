package mk.ukim.finki.wp.service.payment;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import mk.ukim.finki.wp.model.OrderItem_GreenMarket;

import org.springframework.stereotype.Service;

import com.paypal.api.payments.Address;
import com.paypal.api.payments.Amount;
import com.paypal.api.payments.CreditCard;
import com.paypal.api.payments.Details;
import com.paypal.api.payments.FundingInstrument;
import com.paypal.api.payments.Payer;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.Transaction;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.OAuthTokenCredential;
import com.paypal.base.rest.PayPalRESTException;
import com.paypal.base.rest.PayPalResource;

/**
 * Created by ristes on 6.5.15.
 */
@Service
public class PaypalServiceImpl implements PaymentService {

  private APIContext apiContext;

  @PostConstruct
  public void config() {
    InputStream is = PaypalServiceImpl.class.getResourceAsStream("/sdk_config.properties");
    try {
      OAuthTokenCredential res = PayPalResource.initConfig(is);
      String accessToken = res.getAccessToken();

      apiContext = new APIContext(accessToken);

    } catch (PayPalRESTException e) {
      e.printStackTrace();
    }
  }

  @Override
  public Payment executeCreditCardPayment(Address billingAddress, CreditCard creditCard, List<OrderItem_GreenMarket> items) {

    // The Payment creation API requires a list of
    // Transaction; add the created `Transaction`
    // to a List
    List<Transaction> transactions = new ArrayList<Transaction>();

    for (OrderItem_GreenMarket item : items) {
      // ###Details
      // Let's you specify details of a payment amount.
      Details details = new Details();
      details.setSubtotal((int) item.getProduct().getPrice() + "");
      details.setTax((int) (item.getProduct().getPrice() * 0.18) + "");

      // ###Amount
      // Let's you specify a payment amount.
      Amount amount = new Amount();
      amount.setCurrency("USD");
      // Total must be equal to sum of shipping, tax and subtotal.
      amount.setTotal((int) (item.getProduct().getPrice() * 1.18) + "");
      amount.setDetails(details);

      // ###Transaction
      // A transaction defines the contract of a
      // payment - what is the payment for and who
      // is fulfilling it. Transaction is created with
      // a `Payee` and `Amount` types
      Transaction transaction = new Transaction();
      transaction.setAmount(amount);
      transaction.setDescription("EMK book store: " + item.getProduct().getName());
      transactions.add(transaction);
    }


    // ###FundingInstrument
    // A resource representing a Payeer's funding instrument.
    // Use a Payer ID (A unique identifier of the payer generated
    // and provided by the facilitator. This is required when
    // creating or using a tokenized funding instrument)
    // and the `CreditCardDetails`
    FundingInstrument fundingInstrument = new FundingInstrument();
    fundingInstrument.setCreditCard(creditCard);


    // The Payment creation API requires a list of
    // FundingInstrument; add the created `FundingInstrument`
    // to a List
    List<FundingInstrument> fundingInstrumentList = new ArrayList<FundingInstrument>();
    fundingInstrumentList.add(fundingInstrument);

    // ###Payer
    // A resource representing a Payer that funds a payment
    // Use the List of `FundingInstrument` and the Payment Method
    // as 'credit_card'
    Payer payer = new Payer();
    payer.setFundingInstruments(fundingInstrumentList);
    payer.setPaymentMethod("credit_card");

    // ###Payment
    // A Payment Resource; create one using
    // the above types and intent as 'sale'
    Payment payment = new Payment();
    payment.setIntent("sale");
    payment.setPayer(payer);
    payment.setTransactions(transactions);
    Payment createdPayment = null;
    try {

      // Use this variant if you want to pass in a request id
      // that is meaningful in your application, ideally
      // a order id.
      /*
       * String requestId = Long.toString(System.nanoTime(); APIContext
			 * apiContext = new APIContext(accessToken, requestId ));
			 */

      // Create a payment by posting to the APIService
      // using a valid AccessToken
      // The return object contains the status;
      createdPayment = payment.create(apiContext);

    } catch (PayPalRESTException e) {
      e.printStackTrace();
    }
    return createdPayment;
  }
}
