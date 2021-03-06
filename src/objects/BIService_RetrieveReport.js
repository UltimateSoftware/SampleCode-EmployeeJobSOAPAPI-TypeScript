﻿//Buffered method only
/*
Endpoint: http://serviceHost/services/BiDataStream
Headers: {
    Content-Type: text/xml;charset=UTF-8
    SOAPAction: http://www.ultipro.com/dataservices/bistream/2/IBIStreamService/RetrieveReport
}
*/
module.exports = function (reportKey) {
    var retrieveReport = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ns="http://www.ultipro.com/dataservices/bistream/2">\n' +
                             '\t<soap:Header>\n' +
                                 '\t\t<ns:ReportKey>' + reportKey + '</ns:ReportKey>\n' +
                             '\t</soap:Header>\n' +
                             '\t<soap:Body>\n' +
                                 '\t\t<ns:RetrieveReportRequest/>\n' +
                             '\t</soap:Body>\n' +
                         '</soap:Envelope>';
    return retrieveReport;
}