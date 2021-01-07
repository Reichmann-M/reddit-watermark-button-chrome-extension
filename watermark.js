var eImage = document.getElementsByClassName('_3Oa0THmZ3f5iZXAQ0hBJ0k ')[0]
var bSliderOn = false;
var canvas;
var sImage;

var eWatermarkLabel = document.createElement("label")
eWatermarkLabel.innerHTML = "Turn on/off Watermark"

var eWatermarkGeneralLabel = document.createElement("label")
eWatermarkGeneralLabel.className = "switch"

var eWatermarkSwitchInput = document.createElement("input")
eWatermarkSwitchInput.className = "switch-input"
eWatermarkSwitchInput.type = "checkbox"

var eWatermarkSwitchLabel = document.createElement("span")
eWatermarkSwitchLabel.className = "switch-label"
eWatermarkSwitchLabel.setAttribute("data-on", "On")
eWatermarkSwitchLabel.setAttribute("data-off", "Off")

var eWatermarkHandle = document.createElement("span")
eWatermarkHandle.className = "switch-handle"


eWatermarkGeneralLabel.appendChild(eWatermarkSwitchInput)
eWatermarkGeneralLabel.appendChild(eWatermarkSwitchLabel)
eWatermarkGeneralLabel.appendChild(eWatermarkHandle)



eWatermarkSwitchInput.onchange = async function () {
    console.log("ich gehe rein")
    if (!bSliderOn) {
        bSliderOn = true;
        // get image, subreddit, author into variables
        sImage = eImage.firstChild.firstChild;
        var sPostSubreddit = document.getElementsByClassName('_19bCWnxeTjqzBElWZfIlJb')[0].title
        var sPostAuthor = document.getElementsByClassName('_2tbHP6ZydRpjI44J3syuqC _23wugcdiaj44hdfugIAlnX oQctV4n0yUb0uiHDdGnmE')[0].innerHTML

        // prepare canvas
        canvas = document.createElement("canvas")
        canvas.id = 'editedWatermarkImageCanvas'
        canvas.height = sImage.naturalHeight * 1.08
        canvas.width = sImage.naturalWidth

        // draw canvas
        eImage.firstChild.prepend(canvas)
        var ctx = canvas.getContext("2d");
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#262626"
        // ctx.fillStyle = "white"
        ctx.fill()
        ctx.drawImage(sImage, 0, 0);

        // Draw Text
        ctx.font = "30px Helvetica"
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white"
        ctx.lineWidth = 0;
        var context = ctx;
        var styleMarker = '§';
        var styleCodeToStyle = {
            r: '',
            i: 'italic',
            b: 'bold',
            l: 'lighter'
        };

        function drawStyledText(text, x, y, font, fontSize) {
            // start with regular style
            var fontCodeStyle = 'r';
            do {
                // set context font
                context.font = buildFont(font, fontSize, fontCodeStyle);
                // find longest run of text for current style
                var ind = text.indexOf(styleMarker);
                // take all text if no more marker
                if (ind == -1) ind = text.length;
                // fillText current run
                var run = text.substring(0, ind);
                context.fillText(run, x, y);
                // return if ended
                if (ind == text.length) return;
                // move forward
                x += context.measureText(run).width;
                // update current style
                fontCodeStyle = text[ind + 1];
                // keep only remaining part of text
                text = text.substring(ind + 2);
            } while (text.length > 0)
        }

        function buildFont(font, fontSize, fontCodeStyle) {
            var style = styleCodeToStyle[fontCodeStyle];
            return style + ' ' + fontSize + 'px' + ' ' + font;
        }

        // draw text
        drawStyledText(`Posted in §b${sPostSubreddit}§r by §b${sPostAuthor}`, sImage.naturalHeight * 0.04, sImage.naturalHeight * 1.045, 'Sans-Serif', sImage.naturalWidth * 0.026);

        // draw reddit logo
        var img = new Image;
        img.onload = function () {
            ctx.drawImage(img, sImage.naturalWidth - (sImage.naturalHeight * 0.04) - img.width, (sImage.naturalHeight + sImage.naturalHeight * 0.04) - (img.height * 0.5));
        }
        // img.src = "https://i.ibb.co/z8HM36j/reddit-logo.png";
        img.src = "https://i.ibb.co/b5B2Wm3/reddit-logo2.png";


        console.log(sImage)
        sImage.style.display = "none"

    } else {
        bSliderOn = false;
        sImage.style.display = "inline"
        canvas.remove();
        console.log("back")
        
    }


}


if (eImage != undefined) {
    console.log('found, we\'ll continue')
    setTimeout(() => {
        var ePostTitleDiv = document.getElementsByClassName('_3-miAEojrCvx_4FQ8x3P-s')[0];
        ePostTitleDiv.append(eWatermarkGeneralLabel)
        ePostTitleDiv.append(eWatermarkLabel)
    }, 2000)
}



// https://i.redd.it/z3y8l40u5j961.jpg