import Navbar from "@/components/navbar"

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({children}: Props){
    return <div>
        <Navbar/>
        {children}
    </div> 
}