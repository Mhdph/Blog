import React from "react";
import "../style/Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://thesavvyheart.com/wp-content/uploads/2019/12/Minimal-2020-Desktop-Calendar-Wallpaper-Free-Download-by-The-Savvy-Heart-Interior-Design-Studio.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">موزیک</span>
          <span className="postCat">زندگی</span>
        </div>
        <span className="postTitle">لورم ایپسوم متن ساختگی</span>
        <hr />
        <span className="postDate">تاریخ نوشته: ۱ ساعت قبل</span>
      </div>
      <p className="postDesc">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
      </p>
    </div>
  );
}

export default Post;
