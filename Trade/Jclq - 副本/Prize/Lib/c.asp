<%
function group(nu, groupl, result) {

    var result = result ? result : [];
    var nul = nu.length;
    var outloopl = nul - groupl;

    var nuc = nu.slice(0);

    var item = nuc.shift();
    item = item.constructor === Array ? item : [item];


    (function func(item, nuc) {
        var itemc;
        var nucc = nuc.slice(0);
        var margin = groupl - item.length


        if (margin == 0) {
            result.push(item);
            return;
        }
        if (margin == 1) {
            for (var j in nuc) {
                itemc = item.slice(0);
                itemc.push(nuc[j]);
                result.push(itemc);
            }
        }
        if (margin > 1) {
            itemc = item.slice(0);
            itemc.push(nucc.shift());
            func(itemc, nucc);

            if (item.length + nucc.length >= groupl) {
                func(item, nucc);
            }

        }

    })(item, nuc);


    if (nuc.length >= groupl) {
        return group(nuc, groupl, result);
    } else {
        return result;
    }

}
%>