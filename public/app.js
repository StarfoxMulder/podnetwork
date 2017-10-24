
$(document).ready(function(){
   $(".dropdown-button").dropdown({
        hover: true
    });
});


/*

<ul class="nav navbar-nav">
  <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown1" href="/members">Members<i class="material-icons right">arrow_drop_down</i></a>
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="/unbelievable">Unbelievable Podcast</a></li>
      <li><a href="/zengthis">Zeng This!</a></li>
      <li><a href="/stp">Secret Transmission Podcast</a></li>
    </ul>
  </li>
  <li><a href="#">Page 2</a></li>
  <li><a href="#">Page 3</a></li>
</ul>

*/

/*
{"id":"f3b86852-6d4e-4b2b-97e7-9fcea26aa90e","timestamp":"2017-10-23T18:36:09.871Z","lang":"en","result":{"source":"agent","resolvedQuery":"link please","action":"","actionIncomplete":false,"parameters":{},"contexts":[],"metadata":{"intentId":"a5de613c-f3f7-4648-ae5d-9b1bcab954ca","webhookUsed":"false","webhookForSlotFillingUsed":"false","intentName":"link please"},"fulfillment":{"speech":"You can find more information","messages":[{"type":0,"id":"9334f79e-ffe2-468c-8e27-652c98df319d","speech":"You can find more information"},{"type":4,"payload":{"messages":[{"destinationName":"here","platform":"google","type":"link_out_chip","url":"https://www.startpage.com/"}]}}]},"score":1.0},"status":{"code":200,"errorType":"success"},"sessionId":"2d6d7f1d-26c1-244a-a27d-065c2b78c57e"}

{"id":"7c64b50c-4343-46aa-88ff-4e3ef1852127","timestamp":"2017-10-23T18:46:52.968Z","lang":"en","result":{"source":"agent","resolvedQuery":"link please","action":"","actionIncomplete":false,"parameters":{},"contexts":[],"metadata":{"intentId":"a5de613c-f3f7-4648-ae5d-9b1bcab954ca","webhookUsed":"false","webhookForSlotFillingUsed":"false","intentName":"link please"},"fulfillment":{"speech":"You can find more information","messages":[{"type":"simple_response","platform":"google","textToSpeech":"You can find more information"},{"type":"custom_payload","platform":"google","payload":{"messages":[{"destinationName":"here","platform":"google","type":"link_out_chip","url":"https://www.startpage.com/"}]}},{"type":"link_out_chip","platform":"google","id":"3e1b2413-bb4f-48ef-b510-b2f4277d901e","destinationName":"here","url":"https://www.startpage.com/"},{"type":0,"id":"73afe790-8ddd-4a0d-8836-8a78b7586a41","speech":"You can find more information"},{"type":4,"payload":{"messages":[{"destinationName":"here","platform":"google","type":"link_out_chip","url":"https://www.startpage.com/"}]}}]},"score":1.0},"status":{"code":200,"errorType":"success"},"sessionId":"8612d815-30b8-707c-4402-8180722257d5"}

{"id":"74841762-ff8c-47e5-8ce3-b0e67661b8d7","timestamp":"2017-10-23T18:48:59.791Z","lang":"en","result":{"source":"agent","resolvedQuery":"link please","action":"","actionIncomplete":false,"parameters":{},"contexts":[],"metadata":{"intentId":"a5de613c-f3f7-4648-ae5d-9b1bcab954ca","webhookUsed":"false","webhookForSlotFillingUsed":"false","intentName":"link please"},"fulfillment":{"speech":"You can find more information","messages":[{"type":"simple_response","platform":"google","id":"0bc5ef56-8903-4e8f-8303-9721cdebdc39","textToSpeech":"You can find more information"},{"type":"link_out_chip","platform":"google","id":"5a1a170e-bab5-496b-b2bb-c3bb137f653d","destinationName":"here","url":"https://www.startpage.com/"},{"type":0,"id":"03d10f89-7e36-4b40-a177-0f2a08fdcd0c","speech":"You can find more information"},{"type":4,"payload":{"messages":[{"destinationName":"here","platform":"google","type":"link_out_chip","url":"https://www.startpage.com/"}]}}]},"score":1.0},"status":{"code":200,"errorType":"success"},"sessionId":"12cb6c2d-1c68-7317-d62f-da10ff34986f"}

{
  "speech":"You can find more information",
  "messages":[
    {
        "type":"simple_response",
        "platform":"google",
        "id":"0bc5ef56-8903-4e8f-8303-9721cdebdc39",
        "textToSpeech":"You can find more information"
    },
    {
        "type":"link_out_chip",
        "platform":"google",
        "id":"5a1a170e-bab5-496b-b2bb-c3bb137f653d",
        "destinationName":"here",
        "url":"https://www.startpage.com/"
    }
  ]
}

{
   "id":"74841762-ff8c-47e5-8ce3-b0e67661b8d7",
   "timestamp":"2017-10-23T18:48:59.791Z",
   "lang":"en",
   "result":{
      "source":"agent",
      "resolvedQuery":"link please",
      "action":"",
      "actionIncomplete":false,
      "parameters":{

      },
      "contexts":[

      ],
      "metadata":{
         "intentId":"a5de613c-f3f7-4648-ae5d-9b1bcab954ca",
         "webhookUsed":"false",
         "webhookForSlotFillingUsed":"false",
         "intentName":"link please"
      },
      "fulfillment":{
         "speech":"You can find more information",
         "messages":[
            {
               "type":"simple_response",
               "platform":"google",
               "id":"0bc5ef56-8903-4e8f-8303-9721cdebdc39",
               "textToSpeech":"You can find more information"
            },
            {
               "type":"link_out_chip",
               "platform":"google",
               "id":"5a1a170e-bab5-496b-b2bb-c3bb137f653d",
               "destinationName":"here",
               "url":"https://www.startpage.com/"
            },
            {
               "type":0,
               "id":"03d10f89-7e36-4b40-a177-0f2a08fdcd0c",
               "speech":"You can find more information"
            },
            {
               "type":4,
               "payload":{
                  "messages":[
                     {
                        "destinationName":"here",
                        "platform":"google",
                        "type":"link_out_chip",
                        "url":"https://www.startpage.com/"
                     }
                  ]
               }
            }
         ]
      },
      "score":1.0
   },
   "status":{
      "code":200,
      "errorType":"success"
   },
   "sessionId":"12cb6c2d-1c68-7317-d62f-da10ff34986f"
}
*/
