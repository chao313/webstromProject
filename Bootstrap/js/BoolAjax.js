/**
 * Created by One on 2017/3/6.
 */
function Util_BoolAjax(type, url, param) {
    var status = $(function() {
         $.ajax({
            type : type,
            url : url,
            data : {
                param : param
            },
            async : false,
            success : function(data) {
                if('true' == data){
                    status = true;

                }else if('false'==data){
                    status = false;

                }else{

                    status = "the response is not true ";

                }


            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {

                status = "the network is error";

            }
        });
    });

    return status;

}


