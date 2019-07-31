import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Index } from "elasticlunr"
import ucfirst from '../../utils/ucfirst'

import Overlay from '../overlay'
import { useStaticQuery, graphql, Link } from 'gatsby';

const SearchHeading = styled.span`${tw`block text-3xl mb-2 text-center`}`

const OverlaySearch = (props) => {

    let query = ``

    const data = useStaticQuery(graphql`query SearchIndexQuery{
        siteSearchIndex {
            index
        }
    }`)

    const shouldClose = () => {
        return !query.length;
    }

    const getQuery = (q) => {
        query = q
    }

    return (
        <Overlay event={"search"} opacity="0.95" shouldCloseOnEsc={shouldClose}>
            <SearchHeading>Search</SearchHeading>
            <Search searchIndex={data.siteSearchIndex.index} getQuery={getQuery}/>
        </Overlay>
    )
}
export default OverlaySearch



const SearchInputGroup = styled.div`${tw`relative flex border-2 rounded-full`}`
const SearchInput = styled.input.attrs({
    type: 'text'
})`${tw`block w-full bg-transparent px-3 pl-5 py-2 text-white `} flex-grow:1;`
const SearchInputClear = styled.button.attrs({
    type: 'button'
})`${tw`block cursor-pointer bg-transparent border-none px-3 pr-3 opacity-0 transition-opacity`} ${props=>props.show ? tw`opacity-100` : ''}`
const SearchInputClearInner = styled.span`${tw`w-8 h-8 relative block`}`
const SearchInputClearLine = styled.span`${tw`absolute w-8 bg-white block left-0`} height: 2px; top: 50%; transform: translateY(-50%) rotate(45deg); &:last-child{ transform: translateY(-50%) rotate(-45deg);}`

const SearchResultList = styled.ul`${tw`py-4`}`
const SearchResultItem = styled.li`${tw`text-lg border-b border-white mb-0 py-4`} 
a {
    ${tw`block py-2 hover:text-blue-300`}
    
}`


const SearchTags = styled.div`${tw``}`
const SearchTag = styled.span`${tw`text-blue-300 text-sm mr-3`} a:hover & {${tw`text-blue-500`}}`

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ``,
            results: []
        }

        this._refs = {}

        this.handleRef = this.handleRef.bind(this)
    }

    componentDidMount() {
        if(this._refs.input) this._refs.input.focus();
    }

    handleRef (name) {
        return (ref) => {
            this._refs[name] = ref
        }
    }

    onKeyUp =evt=>{
        if(evt.key !== "Escape") return;
        if(this.state.query.length) this.clearSearch();
    }

    render() {
        return (
            <div>
                <SearchInputGroup>
                    <SearchInput value={this.state.query} onChange={this.search} ref={this.handleRef('input')} onKeyUp={this.onKeyUp} placeholder="Search..."/>
                    <SearchInputClear show={this.state.query.length} onClick={this.clearSearch}>
                        <SearchInputClearInner>
                            <SearchInputClearLine/>
                            <SearchInputClearLine/>
                        </SearchInputClearInner>
                    </SearchInputClear>
                </SearchInputGroup>
                
                <SearchResultList>
                    {this.state.results.map(page => (
                        <SearchResultItem key={page.id}>
                            <Link to={`/blog/${page.slug}`}>
                                {page.title}
                                <SearchTags>
                                    {page.tags.map((tag,index)=>(
                                        <SearchTag key={index}>{ucfirst(tag)}</SearchTag>
                                    ))}
                                </SearchTags>
                            </Link>
                        </SearchResultItem>
                    ))}
                </SearchResultList>
            </div>
        )
    }

    clearSearch = evt => {
        this.setState({
            query: ``,
            results: []
        })
        if(typeof this.props.getQuery === "function") this.props.getQuery(``)
        if(this.refs.input) this._refs.input.focus()
    }

    getOrCreateIndex = () =>
        this.index ? this.index : Index.load(this.props.searchIndex);

    search = evt => {
        const query = evt.target.value
        this.index = this.getOrCreateIndex()
        this.setState({
            query,
            results: this.index
            .search(query, {})
            .map(({ref}) => {
                return this.index.documentStore.getDoc(ref)})
            .filter(page=>{
                const regex = new RegExp("^\/blog\/"+page.slug)
                return !window.location.pathname.match(regex)
            })
        })
        if(typeof this.props.getQuery === "function") this.props.getQuery(query)
    }
}