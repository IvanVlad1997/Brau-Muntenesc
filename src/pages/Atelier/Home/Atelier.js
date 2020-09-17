import React from 'react'
import CategoryList from '../../../components/Atelier/CategoryList/CategoryList'
import Layout from '../../../components/Atelier/Layout/Layout'

class Atelier extends React.Component {
    render() {
        return(
            <Layout>
                <CategoryList />
            </Layout>
        )
    }
}

export default Atelier;