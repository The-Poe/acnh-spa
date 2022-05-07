<h2>前言</h2>
  <p>
  <p>
    這次在熟悉環境時花了蠻多時間之前，之前寫extension都還是用Notepad++改了直接跑。<br/>
    蠻多東西都沒有實作過，好險後來是找到一個比較好的完整教學才回到正軌。<br/>
  也謝謝這次題目其實設計得很有邏輯但是沒有相關經驗的時候看起來真是零零碎碎的不知從何做起。<br/>
  我覺得沒有方向的搜尋資料花了很多時間是這次的敗筆。
  </p>
  
  <p>自己的缺點是一開始就容易多方查資料的導致有點迷失方向，所以起步較慢。</p>
  <p>希望一次次的練習知識跌代起來可以更好應用發揮。</p>
  <p>期待可以進去追上團隊的專業知識，擴建實用的元件庫</p>
  </p>
  
<h2>有疑問的點</h2>
  <ul>
     <li>
       tailwind說主要的css檔要build到public或是dist的正式版去，想請問一下這實際的場景是什麼樣子?<br/>
       和直接用npm start跑有什麼不一樣嗎?
     </li>
    <li>
      會使用tailwind的原因是因為可輕量化且不會再另外用css檔管理，都直接寫在元件的className上嗎?<br/>
      想請問一下實作上選擇tailwind的好處, 因為它其實還是可以用@apply寫在.css檔裡面。
     </li>
  </ul>

<h2>遇到卡住的點</h2>
  <ul>
    <li>使用react-router-dom的Route可以接受到直接修改url的request並更新view。
      <ul>
         <li>但是使用react-router-dom的Link的時候有改變到url，Route的views並沒有改變(修改順序或是exact path也是一樣)。<br/>
           猜測是project setup的時候預設的安裝包有造成react-router-dom的dependency的問題。
         </li>
      </ul>
    </li>
  </ul>
  
<h2>題目上沒完成的地方</h2>
  <p>
  <ul>
    <li>A4 錯誤 url 導向 404 page，並在 10 秒後導向 home page
      <ul>
         <li>還需要一點時間，禮拜天可以再加上去。
         </li>
      </ul>
    </li>
    <li>B3在上方添加 search 的功能，可以用魚的名字（繁體中文）來搜尋，並顯示出結果
      <ul>
         <li> 還沒有認真想這題，應該會傳搜尋字串的參數到Fishlist裡面的，對fishlist裡面的array做過濾再丟到去render。
         </li>
      </ul>
    </li>
    <li>D2替上述元件加上 border, shadow, hover:等，時間充裕的話不影響排版的前提下，依照自己喜好加入 CSS
      <ul>
         <li> 自己覺得有點不美觀不過還是先交了。
         </li>
      </ul>
    </li>
  </ul>

  </p>
