import LTRA from "@/utilities/LTRAnimation"
import Link from "next/link"

const Breadcrumb = (
    {current__page} : 
    {current__page : string}
) => {
  return (
    <section className="page-header page-header-modern custom-page-header bg-color-quaternary">
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <LTRA>
                <h1 className="font-weight-bold text-9 text-color-secondary">Cases</h1>
              </LTRA>
            </div>
            <div className="col-md-4 order-1 order-md-2 align-self-center">
              <ul className="breadcrumb d-block text-md-end">
                <li><Link href="/">Home</Link></li>
                <li className="active">{current__page}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Breadcrumb