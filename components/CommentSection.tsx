'use client'
import Review from "@/components/Review"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@nextui-org/react"
import { User, Link } from "@nextui-org/react"
import { FaStar } from "react-icons/fa"
import RelatedList from "./RelatedList"



export const CommenSection = () => {
  return (
    <>
    <div className='my-20 pt-5 max-w-full border-t '>
        <h1 className='font-medium text-xl lg:text-2xl'><span className='font-semibold text-primary'>| </span>Product Ratings & Reviews</h1>
        <div className='flex flex-col lg:flex-row gap-x-10'>
            <div className='flex flex-col pl-10 gap-y-5 mx-auto'>
                <p className='text-2xl font-medium mt-10'>Overall Rating</p>
                <div className="flex flex-row items-center space-x-1 gap-x-1">
                <p className="text-xl font-medium">4.5</p>
                    {[...Array(5)].map(star => {
                        return <FaStar className="text-yellow-400" key={star} />
                    })}
                </div>
                <div className="flex flex-col space-y-5 w-[200px] sm:w-[600px] mx-auto lg:w-[300px]">
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">5</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={80} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">4</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={60} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">3</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={0} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">2</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={0} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">1</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={0} />
                    </div>
                    <div className="flex mx-auto">
                        <Review />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mt-10 gap-y-3 mx-auto">
                <Card>
                    <CardHeader>
                        <div className="flex flex-row">
                        <User   
                            name="Jane Doe"
                            description={(
                                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                  @jrgarciadev
                                </Link>
                              )}
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                            />
                        </div>
                    </CardHeader>
                    <CardFooter>
                        <p className="text-muted-foreground pb-2 text-xs">Got this for online meetings during the pandemic--the mic on my laptop is pretty crappy and besides I wanted something that can still pick up my voice clearly from a short distance away. Especially given how much time virtual meetings are </p>     
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex flex-row">
                        <User   
                            name="Jane Doe"
                            description={(
                                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                  @jrgarciadev
                                </Link>
                              )}
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                            />
                        </div>
                    </CardHeader>
                    <CardFooter>
                        <p className="text-muted-foreground pb-2 text-xs">Got this for online meetings during the pandemic--the mic on my laptop is pretty crappy and besides I wanted something that can still pick up my voice clearly from a short distance away. Especially given how much time virtual meetings are </p>     
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex flex-row">
                        <User   
                            name="Jane Doe"
                            description={(
                                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                  @jrgarciadev
                                </Link>
                              )}
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                            />
                        </div>
                    </CardHeader>
                    <CardFooter>
                        <p className="text-muted-foreground pb-2 text-xs">Got this for online meetings during the pandemic--the mic on my laptop is pretty crappy and besides I wanted something that can still pick up my voice clearly from a short distance away. Especially given how much time virtual meetings are </p>     
                    </CardFooter>
                </Card>
                <Button variant='link'>View more</Button>
            </div>
            </div>
        </div>
        </>
  )
}