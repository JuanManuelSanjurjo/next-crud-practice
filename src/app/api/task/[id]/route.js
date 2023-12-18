import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}){
    const data = await prisma.task.findUnique({
        where:{
            id: parseInt(params.id)
        }
    })
    return NextResponse.json(data)
}
export async function PUT(request, {params}){
    const body = await request.json()
    try{
        const modified = await prisma.task.update({
            where:{
                id: parseInt(params.id)
            },
            data: body
            // data:{
            //     title: body.title,
            //     description: body.description
            // }
        })

        return NextResponse.json(modified)
    }catch(err){
        return NextResponse.json(err.message)
    }

}


export async function DELETE(request, {params}){
    try{
        const removed = await prisma.task.delete({
            where: {
                id: parseInt(params.id)
            }
        })

        return NextResponse.json("Eliminando tarea " , removed)
    }
    catch(err){
        return NextResponse.json(err.message)
    }

}