import { useEffect, useState } from "react";
import Bottom from "./Bottom";
import Footer from "./Footer";
import HeaderLanding from "./HeaderLanding_lp";
import PageHead from "./PageHead";
import PageTitleLanding from "./PageTitleLanding";

const LayoutFront = ({
    headTitle,
    children,
    pageTitle,
    pageTitleSub,
    pageClass,
    parent,
    child,
}) => {
    const [height, setHeight] = useState();
    useEffect(() => {
        setHeight(window.screen.height);
    }, []);
    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="main-wrapper" className={pageClass}>
                <HeaderLanding />

                    {pageTitle && (
                        <PageTitleLanding
                            pageTitle={pageTitle}
                            pageTitleSub={pageTitleSub}
                            parent={parent}
                            child={child}
                        />
                    )}

               
                    {children}
              

                
                <Footer />
                
            </div>
        </>
    );
};

export default LayoutFront;
