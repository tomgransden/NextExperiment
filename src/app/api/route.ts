import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){

    let nodemailer = require('nodemailer');

    console.log(process.env.PASSWORD);

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp here',
        auth: {
            user: 'email here',
            pass: process.env.PASSWORD
        },
        secure: true
    });

    const body = await req.json();

    console.log(body);

    const mailData = {
        from: "fromemail",
        to: 'toemail',
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