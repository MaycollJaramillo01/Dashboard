export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {field:"user", headerName:"User", width:230, 
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.user}
            </div>
        )
    }
},
{
    field: "Nickname", headerName:"Nickname", width:230
},
{
    field: "Location", headerName:"Location", witdh:230
},
{field:"LogDate", headerName:"Login Date", width:230},
{field: "status", headerName:"Status", width:160,

renderCell: (params) =>{
    return(
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}

        </div>
    )
}

}

]

export  const userRows = [
    {
        id: 589320,
        user: "John Spartan",
        img: "https://images.pexels.com/photos/6335962/pexels-photo-6335962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Nickname: "117",
        Location: "Eridanus 2",
        LogDate: "7 March 2511",
        status : "Active"
    },
    {
        id: 920369,
        user: "Kratos of Sparta",
        img: "https://m.media-amazon.com/images/I/51qDbPazM0L._AC_SL1000_.jpg",
        Nickname: "Ghost of Sparta",
        Location: "Midgard",
        LogDate: "-- --  --",
        status : "Active"
    },
    {
        id: 202986,
        user: "Jonathan Joestar",
        img: "https://m.media-amazon.com/images/I/51qtudWzTzL._AC_SL1000_.jpg",
        Nickname: "JOJO",
        Location: "Orc Street",
        LogDate: "6 May 1895",
        status : "Inactive"
    },
    {
        id: 584962,
        user: "John James",
        img: "https://images.pexels.com/photos/876344/pexels-photo-876344.jpeg",
        Nickname: "Rambo",
       Location: "Bowie Arizona",
        LogDate: "6 July 1945",
        status : "Active"
    },
    {
        id: 580062,
        user: "Sara  Jeanette Connor",
        img:"https://images.pexels.com/photos/2418479/pexels-photo-2418479.jpeg",
        Nickname: "Sara Connor",
       Location: "Houston TX",
        LogDate: "2 July 1989",
        status : "Inactive"
    },
    {
        id: 987462,
        user: "Math Murdock",
        img: "https://images.pexels.com/photos/970517/pexels-photo-970517.jpeg",
        Nickname: "Daredevil",
       Location: "Bowie Arizona",
        LogDate: "6 July 1945",
        status : "Active"
    },
    {
        id: 600002,
        user: "Cris O Maley",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        Nickname: "Cris",
       Location: "Bowie Arizona",
        LogDate: "6 July 1945",
        status : "Active"
    },

    {
        id: 998369,
        user: "Kratos of Sparta",
        img: "https://m.media-amazon.com/images/I/51qDbPazM0L._AC_SL1000_.jpg",
        Nickname: "Ghost of Sparta",
        Location: "Midgard",
        LogDate: "-- --  --",
        status : "Active"
    },
    {
        id: 692986,
        user: "Jonathan Joestar",
        img: "https://m.media-amazon.com/images/I/51qtudWzTzL._AC_SL1000_.jpg",
        Nickname: "JOJO",
        Location: "Orc Street",
        LogDate: "6 May 1895",
        status : "Inactive"
    },
    {
        id: 580562,
        user: "John James",
        img: "https://images.pexels.com/photos/876344/pexels-photo-876344.jpeg",
        Nickname: "Rambo",
       Location: "Bowie Arizona",
        LogDate: "6 July 1945",
        status : "Active"
    },
    {
        id: 589992,
        user: "Sara  Jeanette Connor",
        img:"https://images.pexels.com/photos/2418479/pexels-photo-2418479.jpeg",
        Nickname: "Sara Connor",
       Location: "Houston TX",
        LogDate: "2 July 1989",
        status : "Inactive"
    },
    {
        id: 120462,
        user: "Math Murdock",
        img: "https://images.pexels.com/photos/970517/pexels-photo-970517.jpeg",
        Nickname: "Daredevil",
       Location: "Bowie Arizona",
        LogDate: "6 July 1945",
        status : "Active"
    },
    {
        id: 698692,
        user: "Cris O Maley",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        Nickname: "Cris",
       Location: "Bowie Arizona",
        LogDate: "6 July 1945",
        status : "Active"
    }
  ]  