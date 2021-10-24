import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
import { signIn, signOut, useSession } from "next-auth/client";

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// const AllBloodGroupsQuery = gql`
// query {
//   bloodGroups {
//     id
//     name
//   }
// }
// `

const Home: NextPage = () => {
  const [session, loading] = useSession();

  const [location, setLocation] = useState([0, 0])
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        let p = [position.coords.latitude, position.coords.longitude]
        setLocation(p)
        // console.log(p)
      });
    }
  }, [])
  
  // console.log(location)
  return (
    <main className="flex">
      <div className="sidebar lg:w-3/12 md:w-4/12 bg-white shadow-lg">
        {loading? (
          <div>Loading....</div>
        ):null}
        {
          session?
          (
            <div>
              Hello, {session.user.email ?? session.user.name} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          ):
          (
            <div>
              You are not logged in! <br />
              <button onClick={() => signIn()}>Sign in</button>
            </div>
          )
        }
      </div>
      <div className="presentation lg:w-9/12 md:w-8/12" id="map">
        <MapWithNoSSR user={{name: "Yousuf", avatar: "https://gitlab.com/uploads/-/system/user/avatar/2351361/avatar.png?width=400"}} position={location} />
      </div>
    </main>
  );

  // const position = [51.505, -0.09]
        
  // render(
  //   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  //     <TileLayer
  //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //     />
  //     <Marker position={position}>
  //       <Popup>
  //         A pretty CSS3 popup. <br /> Easily customizable.
  //       </Popup>
  //     </Marker>
  //   </MapContainer>
  // )
}

export default Home
