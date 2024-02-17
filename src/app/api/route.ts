import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){

    let nodemailer = require('nodemailer');

    console.log(process.env.PASSWORD);

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.ionos.co.uk',
        auth: {
            user: 'Info@elitepropproltd.co.uk',
            pass: process.env.PASSWORD
        },
        secure: true
    });

    const body = await req.json();

    console.log(body);

    const mailData = {
        from: "thomas@elitepropproltd.co.uk",
        to: 'Info@elitepropproltd.co.uk',
        subject: body.subject,
        text: "Yo yo yo"
    }

    try {
    await transporter.sendMail(mailData);

    console.log('success')

    } catch(e){
        console.log(e);
        return NextResponse.json({message: "An error occured"}, {status: 400});
    }

    return NextResponse.json({})

}