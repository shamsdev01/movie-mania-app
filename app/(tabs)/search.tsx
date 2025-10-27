import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
      const [searchQuery, setSearchQuery] = useState('')
  
    const {data: movies, loading: moviesLoading, error:moviesError, refetch } = useFetch(() => fetchMovies({
      query: searchQuery,
    }), false)


    useEffect(() => {
      const handle = setTimeout(() => {
        refetch();
      }, 500);
      return () => clearTimeout(handle);
    }, [searchQuery]);
  
  return (
    <View className='flex-1 bg-primary'> 
                <Image source={images.bg} className=" flex-1 absolute w-full z-0 "/>


                <FlatList
                   data={movies ?? []}
                   renderItem={({item}) => <MovieCard {...item} />}
                     keyExtractor={(item)=> item.id.toString()}
                     className='px-5'
                     numColumns={3} 
                     columnWrapperStyle={{justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16,
                     }}
                      contentContainerStyle={{
                        paddingBottom:100
                      }}
                      ListHeaderComponent={
                        <>
                          <View className='w-full flex-row justify-center mt-20 items-center'>
                           <Image source={icons.logo} className="w-12 h-10"/>
                          </View>
                          <View className='my-5'>
                            <SearchBar 
                              value={searchQuery}
                              onChangeText={(text : string) => setSearchQuery(text)}
                            placeholder='Search for movies...' 
                            />
                          </View>
                          { moviesLoading && (
                            <ActivityIndicator size='large' color='#0000ff' className='my-3' />
                          )}
                          { moviesError && (
                            <Text className='text-center text-red-500 my-3 px-5'>Error: {moviesError.message}</Text>
                          )}
                          {!moviesLoading && !moviesError && searchQuery.trim() && movies ?.length >0 && (
                            <Text className='text-white text-xl font-bold'>
                              Search Results for {''}<Text className='text-accent'>{searchQuery}</Text>
                            </Text>
                          )}
                        </>
                      }
                      ListEmptyComponent={
                        !moviesLoading && !moviesError ? (
                          <View className='mt-10 px-5'>
                          <Text className='text-center text-gray-500 my-3'>
                            {searchQuery.trim() ? 'No results found.' : ' Search for a movie.'}
                          </Text>
                          </View>
                        ) : null
                      }
                     />

    </View>
  )
}

export default Search