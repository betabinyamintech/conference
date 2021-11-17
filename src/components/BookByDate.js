import React from "react";
import { Card, Divider } from "antd";
import { booksExample } from "../context/mock";
import { FormOutlined } from "@ant-design/icons"


export const BookByDate = ({ flag, book }) => {

    console.log('book', book)
    return (

        <>
            {/* <Card type="inner" style={{ marginTop: 16 }} > */}
            {/* להוריד את הסטייל כשכל האפליקציה תהיה במצב עברית */}
            <p style={{ textAlign: "right" }}> - {book.endTime} {book.startTime} | {book.logdate} יום  </p>
            {/* <p style={{ textAlign: "right" }}> חדר עד {book.paticipants} משתתפים{book.name}</p> */}
            {/* הקלאס גורם ששתי התגיות פי יהיו באותה שורה */}
            {/* <p class="alignright" style={{ display: "inlineBlock" }}> אסימונים נוצלו {book.value}</p> */}
            {/* //הלינק צריך להיות לפניה לשרת של הקומפוננטה בוקינג רקווסט דיטיילס */}
            {flag ? <FormOutlined class="alignleft" type='text' style={{ color: "blue" }} /> : <p class="alignleft" style={{ color: "gray" }}>הוזמן בתאריך כלשהו</p>}
            <Divider />
            {/* <p  class="alignleft" ><a href={()=>{confirmBooking()}} action >גם טוב</a></p> */}
            {/* </Card>  */}
        </>

    )
}


