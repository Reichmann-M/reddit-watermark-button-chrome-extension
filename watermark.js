var eWatermarkDiv = document.createElement("div")
var eWatermarkButton = document.createElement("button")
var eWatermarkIconSpan = document.createElement("span")
var eWatermarkIcon = document.createElement("i")
var eWatermarkTextSpan = document.createElement("span")

eWatermarkDiv.appendChild(eWatermarkButton)
eWatermarkButton.appendChild(eWatermarkIconSpan)
eWatermarkIconSpan.appendChild(eWatermarkIcon)
eWatermarkButton.appendChild(eWatermarkTextSpan)

eWatermarkTextSpan.innerHTML = "Copy image with watermark"

eWatermarkButton.onclick = function() {
    console.log('pressed copy')
}


var eImage = document.getElementsByClassName('_3Oa0THmZ3f5iZXAQ0hBJ0k ')[0]


if (eImage != undefined) {
    console.log('found, we\'ll continue')
    
    var i = 0;
    setTimeout(() => {
        var ePostTitleDiv = document.getElementsByClassName('_3-miAEojrCvx_4FQ8x3P-s')[0];
        console.log(ePostTitleDiv)
        ePostTitleDiv.append(eWatermarkDiv)
        console.log(i)
        i++;
    }, 3000)
    
}





// var divthing = document.createElement("button");
// divthing.innerHTML = 'Copy image with'
// oPostActionBar.append(divthing)

// console.log(oPostActionBar)