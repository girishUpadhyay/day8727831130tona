import React from 'react';
// import Carousel from 'react-material-ui-carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { Paper } from '@material-ui/core'
import '../../assets/css/style.css'

import HeadingImage from '../components/HeadingImages'
import { Container, Row, Col, Label } from 'reactstrap';
import { Image } from 'react-bootstrap';
import HeadingImageDetails from '../components/HeadingImageDetails';
import Scanner from './Scanner'

import FeatureImage from './FeaturesImage'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const styles = theme => ({
    drawerPaper: { backgroundColor: "blue" }
});

export default class Example extends React.Component {
    // (props)

    // var items = [
    //     {
    //         name: "Random Name #1"
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]

    // return (
    //     <Carousel>
    //         {
    //             items.map( item => {
    //                 <Item item={item}>
    //             })
    //         }
    //     <Carousel/>
    // )

    constructor(props) {
        super(props)
        this.state = {


            userDetailsData: [],
            src: "",
            title: "",
            isVisibleImageDetailsSection:false,
            imageDetails:[]
        }
    }
    componentDidMount(a) {

        fetch("https://74k4rzrsqubz5ma3f-mock.stoplight-proxy.io/api/v1/images/list")
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({ userDetailsData: result })

                    console.log("Result is ::", this.state.userDetailsData)
                },
        )

            .catch(err => {
                console.log("The error code ", err)
            })


            // Image Description

           


    }

    clickImage(a) {

        var c = JSON.parse(a)
        var src1 = c.url
        var title1 = c.title
        this.setState({ src: src1 });
        this.setState({title:title1})
        this.setState({isVisibleImageDetailsSection:true})

        localStorage.setItem("id",c.id)
        
        setTimeout(() => {
            this.setState({ src: src1 });
        this.setState({title:title1})
            // alert(this.state.src)
        }, 1000)

        fetch("https://74k4rzrsqubz5ma3f-mock.stoplight-proxy.io/api/v1/images?id="+c.id)
        .then(res => res.json())
        .then(
            (result) => {

                this.setState({ imageDetails: result })

                console.log("Result is ::", this.state.imageDetails.description)
            },
    )

        .catch(err => {
            console.log("The error code ", err)
        })
        //  this.setState({title:"shshdhdh"})


    }

    render() {
        return (
            <div style={{ padding: "70px", display: "block", margin: "auto" }}>
                <Container>
                    <div>
                        <Row>
                            <Col xs="12">
                                <HeadingImage />
                            </Col>
                        </Row>
                        <div className="paddingCorousel" style={{backgroundColor:"#f5e8e8"}}>
                        
                        <Paper  style={{width:"60%",display:"block",margin:"auto"}}>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={10000000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                                style={{backgroundColor:"red"}}
                            >
                                {this.state.userDetailsData.map((value) => {

                                    return (
                                        // <Col xs="3">
                                        
                                        
                                        <Paper style={{ border: "2px solid #de4e4e" }}>

                                            <Image src={value.url} style={{ maxWidth: "100%", maxHeight: "100%", backgroundColor: "red" }} onClick={() => this.clickImage(JSON.stringify(value))} />
                                        </Paper>
                                       
                                        // </Col>
                                        // <div style={{width:"50%"}}>
                                        // <Image src={value.url} style={{ maxWidth: "100%", maxHeight: "100%" }} />

                                        // </div>
                                    )
                                })}
                            </Carousel>
                        </Paper>
                        </div>
                      
                        {this.state.isVisibleImageDetailsSection==true ?
                        <div style={{ marginTop: "40px"}}>
                        <HeadingImageDetails />
                        <div className="imageDetailsPart">
                        <Row>
                            <Col md="5">
                                
                             <Image src={this.state.src} style={{ maxWidth: "70%", maxHeight: "70%" }} />

                            </Col>
                            <Col md="5" className="paddingImageSection">
                            <Row style={{marginTop:"30px"}}>
                            <h2 className="imageHeading">Title of the Image</h2>
                            </Row>
                            <Row>
                               <span> {this.state.title}</span>
                                </Row>
                                <Row>
                                    <h2 style={{fontSize:"17px"}}>Description</h2>
                                    <span className="colorDescription">{this.state.imageDetails.description}</span>
                                    </Row>
                            
                            </Col>
                        </Row>
                        <Row>
                    <FeatureImage/>
                        </Row>
                        <Row style={{marginTop:"30px"}}>
                        <Scanner/>
                            </Row>
                        </div>
                       
                      
                    </div> :null}
                   
                        

                    </div>
                </Container>


                {/* <Carousel>
                    {this.state.items.map((value)=>{

                        return(
                           <Paper>
                           <h2>    {value.name} </h2>
                           <p>{value.description}</p>
                          <button>
                              Check it out !
                              </button>
                         
                           </Paper>
                        )
                    })}
                    </Carousel> */}
            </div>
        )

    }




}

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         <Paper/>
//     )
// }