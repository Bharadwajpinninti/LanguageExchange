import React from 'react'
import { getUserFriends } from '../lib/api'
import { useQuery } from '@tanstack/react-query'
import FriendCard from '../components/FriendCard'

const Friends = () => {
    const {data:friends=[],isLoading:loadingFriends} = useQuery({
    queryKey:["friendsList"],
    queryFn:getUserFriends
  })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {friends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
    </div>
  )
}

export default Friends