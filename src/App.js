import './App.css';
import UserProfileSelector from './component/userProfileSelector'
import Rails from './component/rails'
import React, { useState, useEffect } from 'react';

import * as Session from './util/session'
import * as Store from './util/store'
import * as Mapping from './util/mapping'
import persona from "./component/profile/persona";
import pokemon from "./component/profile/pokemon";

const handleReset = (setSession, setProfile,setCounter) => {
  Store.Reset()
  setSession("")
  setProfile(null)
  setCounter(null)
}

const getProfileString = (profile) => {
  if(profile)
    return `${persona}-${pokemon}`
  else return ""
}
function App() {
  const [counter, setCounter] = useState(null);
  const [session, setSession] = useState("");
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // check session
    if (!Store.GetStoredSession()) {
      Store.CreateStoredSession(Session.GetSession())
    }

    setSession(Store.GetStoredSession())

    // check profile
    if (Store.GetStoredProfile()) {
      setProfile(Store.GetStoredProfile())
    }

    if (profile) {
      setIsLoading(true)
      Mapping.getExperimentTreatmentsForSegments(Mapping.railOrderExp)
          .then(data => {
            setCounter({
              [Mapping.railOrderExp]:Mapping.getSegmentCounter(Mapping.railOrderExp, data.data, profile)})
            setIsLoading(false)
          })
    }

  },[session, getProfileString(profile)])


  return (
      isLoading ? <h1>LOADING....</h1> :
          <div className="App">
            {!profile && <UserProfileSelector session={session} setProfile={setProfile}/>}
            {counter && <Rails profile={profile} counter={counter}/>}
            <h1>{session}</h1>
            <button onClick={()=>handleReset(setSession, setProfile,setCounter)}>Reset</button>
          </div>
  );
}

export default App;
