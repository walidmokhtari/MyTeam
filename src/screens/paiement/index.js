import React, {useContext} from 'react';
import { CreditCardInput } from "react-native-credit-card-input";
import styled from 'styled-components';
import AuthContext from '../../configs/context';

// create a component
const CURRENCY = 'EUR';
var CARD_TOKEN = null;

function getCreditCardToken(creditCardData){
    // alert()
    const card = {
      'card[number]': creditCardData.values.number.replace(/ /g, ''),
      'card[exp_month]': creditCardData.values.expiry.split('/')[0],
      'card[exp_year]': creditCardData.values.expiry.split('/')[1],
      'card[cvc]': creditCardData.values.cvc
    };
    return fetch('https://api.stripe.com/v1/tokens', {
      headers: {
        // Use the correct MIME type for your server
        Accept: 'application/json',
        // Use the correct Content Type to send data to Stripe
        'Content-Type': 'application/x-www-form-urlencoded',
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer pk_test_51KHW5kKqDxV6BG4Cp4aw7iOj2D2v7PaIocRjvmvKZ54iCckKC6TcXehTY7xJfJHqgzVYy2BekMu8rD2ROZ7kiEre00noX4IcG5`
      },
      // Use a proper HTTP method
      method: 'post',
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map(key => key + '=' + card[key])
        .join('&')
    }).
    then(response => response.json())
    .catch((error)=>console.log(error))
  };
  /**
   * The method imitates a request to our server.
   *
   * @param creditCardToken
   * @return {Promise<Response>}
   */
   function subscribeUser(creditCardToken){
    return new Promise((resolve) => {
      CARD_TOKEN = creditCardToken.id;
      setTimeout(() => {
        resolve({ status: true });
      }, 1000);
    });
  };
  


const Paiement = (props) => {

  const [CardInput, setCardInput] = React.useState({});
  const { currentPlayer, addPlayerToTeamList } = useContext(AuthContext);

  const onSubmit = async () => {

    if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
      alert('Invalid Credit Card');
      return false;
    }

    let creditCardToken;
    try {
     
      creditCardToken = await getCreditCardToken(CardInput);
    
      if (creditCardToken.error) {
        alert("creditCardToken error");
        return;
      }
    } catch (e) {
      console.log("e",e);
      return;
    }
    // Send a request to your server with the received credit card token
    const { error } = await subscribeUser(creditCardToken);
    // Handle any errors from your server
    if (error) {
      alert(error)
    } else {
     
      let pament_data = await charges();
      if(pament_data.status == 'succeeded')
      {
        addPlayerToTeamList(currentPlayer);
        alert("Payment Successfully, The player has been added to your player list");
      }
      else{
        alert('Payment failed');
      }
    }
  };



  const charges = async () => {

    const card = {
        'amount': 50, 
        'currency': CURRENCY,
        'source': CARD_TOKEN,
        'description': "Developers Sin Subscription"
      };

      return fetch('https://api.stripe.com/v1/charges', {
        headers: {
          
          Accept: 'application/json',
          
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer sk_test_51KHW5kKqDxV6BG4CZUnPDhL5ssB22bJ2zhqHSSFKb4ggjZla0sLsEzjzrPjnudMbWgjVuYBAt4FdxfeFLx96klKR001WhKjr6P`
        },

        method: 'post',
       
      
        body: Object.keys(card)
          .map(key => key + '=' + card[key])
          .join('&')
      }).then(response => response.json());
  };

  const _onChange =(data) => {
    setCardInput(data)
  }

    return (
        <>
            <CreditCardInput onChange={_onChange}/>
            <Button onPress={onSubmit}>
                 <Text>
                   Pay Now
                 </Text>
            </Button>
        </>
    );
}

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color:  #2471A3;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`

const Text = styled.Text`
    color: white;
`

export default Paiement;