import React from 'react'
import Layout from '../components/Layout'
import Home from './home'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Index = () => (
    <div >
        <Layout>
            <Home />
        </Layout>
    </div>
)
export default Index 
