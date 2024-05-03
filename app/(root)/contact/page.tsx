import { Button } from '@/components/ui/button'
import { Divider  } from '@nextui-org/react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LocateFixedIcon, MailIcon, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <section className='max-w-7xl mx-auto my-20 px-10'>
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold text-gray-700 underline decoration-4 underline-offset-8 decoration-primary pb-8'>CONTACT</h1>
            <Divider orientation="horizontal"/>
            <Divider orientation="horizontal" />
            <Divider orientation="horizontal" />
            <Divider orientation="horizontal" />
            <Divider orientation="horizontal" />
            <Divider orientation="horizontal" />
            <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-col'>
                    <h1 className='font-medium text-2xl pt-3'>Contact us</h1>
                    <p className='text-md text-muted-foreground pt-3 max-w-xl text-balance pb-3 border-b mr-5'>We value your feedback, inquiries, and concerns. Whether you have questions about our products, need assistance with an order, or simply want to share your thoughts, we&apos;re here to help. Our dedicated customer support team is committed to providing you with the best possible assistance. Feel free to reach out to us via the contact form below, and we&apos;ll get back to you promptly.</p>
                    <p className='text-md text-muted-foreground pt-4 flex flex-row gap-x-2 mr-5 items-center  text-balance border-b pb-3'> <MapPin  /> Add: H.No.24, Behind Dr Rjeevan&apos;s Clinic, Near Lucky Roundabout, Ajman Industrial Area 4, Ajman</p>
                    <p className='text-md text-muted-foreground pt-4 flex flex-row gap-x-2 mr-5 items-center max-w-xl text-balance border-b pb-3'> <MailIcon /> Email: raazain.store@gmail.com</p>
                    <p className='text-md text-muted-foreground pt-4 flex flex-row gap-x-2 mr-5 items-center max-w-xl text-balance pb-3 border-b'> <PhoneCall />Phone: +971 55 852 mr-5 2 mr-5916</p>
                </div>
                <div className='flex flex-col justify-between'>
                    <h1 className='font-medium text-2xl py-3'>Send Your Comments</h1>
                    <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
                        <Input type="email" placeholder='Email' className='min-w-[300px]'/>
                        <Input type="name" placeholder='Name' className='min-w-[300px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <Input type="phone" placeholder='Phone' className='max-w-[620px]'/>
                    </div>
                    <div className='flex flex-col pt-5'>
                    <Textarea
                        placeholder="Enter your message"
                        className="max-w-[620px]"
                        />
                        <Button className='mt-6'>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactPage