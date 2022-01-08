function payWithPaystack(){
    var handler = PaystackPop.setup({
        key: 'pk_test_5ba957c64c21a6fe4a21d20379a6e79a1b3b85af',
        email: 'annuvere@gmail.com',
        amount: 370000,
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2347068617694"
                }
            ]
        },
        callback: function (response) {
            alert('success, transaction ref is ' + response);
        },
        onclose: function () {
            alert('Transaction cancelled');
        }
    });
    handler.openIframe();
}