import {Helmet} from "react-helmet-async"
type props={
    title:string, 
    description:string
}
const Title = ({title, description}:props) => {
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
}

export default Title
