import React from "react"

const Intro = () => {

  return (
    <div className='background'>
      <svg fill='#65B1BC' id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <rect x="0" y="0" width="960" height="540" fill='#d1d1d1'></rect>
        {/* <g fill="#FFFFFF"><circle r="14" cx="142" cy="270"></circle><circle r="1" cx="51" cy="547"></circle><circle r="12" cx="497" cy="29"></circle><circle r="3" cx="178" cy="29"></circle><circle r="9" cx="151" cy="616"></circle><circle r="3" cx="112" cy="285"></circle><circle r="1" cx="359" cy="221"></circle><circle r="9" cx="504" cy="364"></circle><circle r="4" cx="653" cy="673"></circle><circle r="3" cx="792" cy="536"></circle><circle r="2" cx="666" cy="139"></circle><circle r="10" cx="73" cy="633"></circle><circle r="5" cx="709" cy="355"></circle><circle r="1" cx="640" cy="171"></circle><circle r="9" cx="255" cy="97"></circle><circle r="6" cx="181" cy="329"></circle><circle r="4" cx="647" cy="44"></circle><circle r="4" cx="317" cy="175"></circle><circle r="4" cx="200" cy="533"></circle><circle r="9" cx="687" cy="176"></circle><circle r="3" cx="226" cy="603"></circle><circle r="10" cx="365" cy="29"></circle><circle r="1" cx="756" cy="311"></circle><circle r="8" cx="125" cy="659"></circle><circle r="6" cx="875" cy="191"></circle><circle r="4" cx="556" cy="120"></circle><circle r="12" cx="629" cy="490"></circle><circle r="1" cx="109" cy="390"></circle><circle r="4" cx="637" cy="635"></circle><circle r="1" cx="603" cy="306"></circle><circle r="3" cx="145" cy="425"></circle><circle r="0" cx="587" cy="66"></circle><circle r="1" cx="23" cy="219"></circle><circle r="2" cx="769" cy="361"></circle><circle r="11" cx="396" cy="389"></circle><circle r="9" cx="681" cy="410"></circle><circle r="7" cx="336" cy="504"></circle><circle r="9" cx="526" cy="269"></circle><circle r="8" cx="38" cy="496"></circle><circle r="8" cx="732" cy="612"></circle><circle r="1" cx="479" cy="76"></circle><circle r="11" cx="155" cy="660"></circle><circle r="2" cx="124" cy="118"></circle><circle r="1" cx="875" cy="53"></circle><circle r="8" cx="103" cy="156"></circle><circle r="0" cx="330" cy="257"></circle><circle r="5" cx="508" cy="601"></circle><circle r="7" cx="778" cy="173"></circle><circle r="10" cx="279" cy="279"></circle><circle r="2" cx="291" cy="630"></circle><circle r="1" cx="100" cy="512"></circle><circle r="9" cx="836" cy="603"></circle><circle r="2" cx="788" cy="603"></circle><circle r="7" cx="331" cy="535"></circle><circle r="12" cx="418" cy="442"></circle><circle r="9" cx="740" cy="415"></circle><circle r="10" cx="657" cy="535"></circle><circle r="3" cx="774" cy="11"></circle> */}
          {/* <circle r="8" cx="768" cy="110"></circle><circle r="9" cx="812" cy="563"></circle><circle r="2" cx="32" cy="7"></circle><circle r="5" cx="163" cy="498"></circle><circle r="3" cx="771" cy="240"></circle><circle r="10" cx="59" cy="365"></circle><circle r="1" cx="49" cy="595"></circle><circle r="4" cx="550" cy="673"></circle><circle r="10" cx="505" cy="660"></circle><circle r="4" cx="459" cy="658"></circle><circle r="0" cx="272" cy="467"></circle><circle r="7" cx="744" cy="150"></circle><circle r="4" cx="381" cy="562"></circle><circle r="11" cx="805" cy="363"></circle><circle r="1" cx="746" cy="82"></circle><circle r="4" cx="813" cy="457"></circle><circle r="7" cx="659" cy="84"></circle><circle r="3" cx="855" cy="127"></circle><circle r="0" cx="239" cy="125"></circle><circle r="5" cx="21" cy="350"></circle><circle r="3" cx="741" cy="249"></circle><circle r="3" cx="212" cy="322"></circle><circle r="6" cx="224" cy="551"></circle><circle r="7" cx="505" cy="448"></circle><circle r="7" cx="51" cy="109"></circle><circle r="12" cx="141" cy="311"></circle><circle r="5" cx="603" cy="262"></circle><circle r="8" cx="452" cy="400"></circle><circle r="9" cx="274" cy="655"></circle><circle r="5" cx="761" cy="492"></circle><circle r="1" cx="262" cy="176"></circle><circle r="4" cx="575" cy="277"></circle><circle r="0" cx="466" cy="504"></circle></g> */}
        <path d="M0 229L53.3 260.5C106.7 292 213.3 355 320 347.7C426.7 340.3 533.3 262.7 640 248.7C746.7 234.7 853.3 284.3 906.7 309.2L960 334L960 541L906.7 541C853.3 541 746.7 541 640 541C533.3 541 426.7 541 320 541C213.3 541 106.7 541 53.3 541L0 541Z" ></path></svg>
      <svg fill='#9ac5ca' id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 229L53.3 260.5C106.7 292 213.3 355 320 347.7C426.7 340.3 533.3 262.7 640 248.7C746.7 234.7 853.3 284.3 906.7 309.2L960 334L960 541L906.7 541C853.3 541 746.7 541 640 541C533.3 541 426.7 541 320 541C213.3 541 106.7 541 53.3 541L0 541Z" ></path></svg>
      <div className='shape'>
        <div className='title'>
          <h1>Anna <span>Wilczynska</span></h1>
          <p className='job-title'> Junior Software Developer</p>
        </div >
      </div>
      <div className='navigate animate__animated animate__bounceIn'>
        <h2>Navigation</h2>
        <p className=''> Now, you can also use arrow keys<br />to navigate between sections.</p>
        <div className='arrow' />
      </div>


    </div >
  )
}
export default Intro