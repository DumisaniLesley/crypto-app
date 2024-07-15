import Image from "next/image"

const user = [
    { 
        id: 1, 
        image: '/assets/users/1.jpg' 
    },
    { 
        id: 1, 
        image: '/assets/users/2.jpg' 
    },
    { 
        id: 1, 
        image: '/assets/users/3.jpg' 
    },
    { 
        id: 1, 
        image: '/assets/users/4.jpeg' 
    },
    { 
        id: 1, 
        image: '/assets/users/5.webp' 
    },
    { 
        id: 1, 
        image: '/assets/users/6.webp' 
    },
]
const Users = () =>  {
  return (
    <div className="flex">
        {user.map((user) => (
            <div key={user.id} className="rounded-full">
                <Image src={user.image} width={100} height={100} alt="user" className="rounded-full -mr-10 stroke-white"/>
            </div>
        ))}
    </div>
  )
}

export default Users