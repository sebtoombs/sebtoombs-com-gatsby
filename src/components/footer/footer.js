import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { ContainerPadded } from "../container"
import ProtectedLink from "../ProtectedLink"
import { FaTwitter, FaEnvelope } from "react-icons/fa"

const FooterTop = styled.div`
    ${tw`bg-pink-800 pb-1`} background-image: linear-gradient(100deg, #e13fd1 0%, #9200ab 100%);
`
const FooterStyled = styled.footer`
    ${tw`relative bg-blue-600 text-white pt-16 pb-20`} background-image: linear-gradient(100deg, #667EEA 0%, #5A67D8 100%);
`

const ContactTable = styled.table`
    td {
        ${tw`px-2 py-1`}
    }
    a {
        ${tw`text-gray-300 border-b border-gray-300`}
    }
`

const FooterStego = styled.div`${tw`relative ml-auto mr-0`} background-size: contain; background-repeat: no-repeat;  width: 200px; height: 100px;

background-image: url("data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEyNDdweCIgaGVpZ2h0PSI3MDZweCIgdmlld0JveD0iMCAwIDEyNDcgNzA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9IlBhZ2UtMi1Db3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMDAwMDAwLCAtMTkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02ODAuNDA1NjI0LDM0MS4xMTAwNjcgQzczNi42NDM2NDgsMzI3LjA2NTM3MSA4MDIuMzMwMDgxLDMxOSA4NzIuNSwzMTkgQzEwODAuNDM1MjEsMzE5IDEyNDksMzg5LjgyMzY3OCAxMjQ5LDQ3Ny4xODkxMTIgQzEyNDksNTY0LjU1NDU0NyAxMDE1LjY2MzUxLDU1NC42MTczNyA4ODEuMTMzOTU2LDYzOS4wMzMwMTQgQzg0OS4zODA2MTEsNjU4Ljk1Nzg0OSA3OTEuMDA5NjE3LDc0MS4zNDY0ODggNjY5LjA0NTU5MSw3MjIuMTExNDI1IEM2MTkuMDUwODkzLDcyNy44MzU2NTEgNDQyLjQyMjYsNzAxLjQ1NzIyMSA0MDMuNSw3MDEuNDU3MjIxIEMyNDMuNjE0NjEyLDcwMS40NTcyMjEgMjcsNjMwLjYzMzU0MyAyNyw1NDMuMjY4MTA5IEMyNyw0NTUuOTAyNjc0IDE5NS41NjQ3OTIsMzg1LjA3ODk5NiA0MDMuNSwzODUuMDc4OTk2IEM0NDUuODQ2OTY0LDM4NS4wNzg5OTYgNjM1LjQzNzg0OCwzMzQuNjA4NzgxIDY3My40Mjc3NjUsMzQwLjAyNTEzNSBDNjc1LjgwMjA0MiwzNDAuMzYzNjQ0IDY3OC4xMjc2NDcsMzQwLjcyNTQ3OSA2ODAuNDA1NTMsMzQxLjExMDA5MSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiM0RTVBQjQiPjwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyOS4wMDAwMDAsIDI3Ni41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTUyOS4wMDAwMDAsIC0yNzYuNTAwMDAwKSB0cmFuc2xhdGUoMi4wMDAwMDAsIDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjc4LjAwMDAwMCwgNDA2LjAwMDAwMCkiIGZpbGw9IiM2RjdBNjIiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjM1OTMzMzg4LDguODE3OTQ0ODggQy0wLjc4NjQ0NDYyNyw0MS45NjcwMjI4IC0wLjc4NjQ0NDYyNyw2NC40MzEwNTM4IDIuMzU5MzMzODgsNzYuMjEwMDM3OCBDMjQuNTM4MzMyOSw5My44NjkyNjk4IDY3LjQ3MzQ1MzcsODYuOTA5MDIwMyA4Nyw3Ni4yMTAwMzc4IEM4NC42NTExNTIsNjIuNjM4MDE5MSA4MC4wMTQwNDE1LDM3LjkwMTMzOTggNzMuMDg4NjY4NCwyIEwyLjM1OTMzMzg4LDguODE3OTQ0ODggWiIgaWQ9IlBhdGgtMy1Db3B5LTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjUwMDAwMCwgNDQuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC00My41MDAwMDAsIC00NC41MDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNzAuMDEyMDY1LDAgQzM2NC4wNTI3NzEsNC4yNjM4NzMwOSAzNTkuOTE5NzM2LDguOTcwMzQwNDggMzU3LjYxMjk2MSwxNC4xMTk0MDIyIEMzNDYuNDk4NjcyLDM4LjkyODEzMDEgMzQyLjY2MDczMyw2OC45NTMwNTA0IDM0Ni4zNzMwNTksODIuOTQ2NzAyNCBDMzYxLjA4MDEwOCw5Ny4xMDQzODc0IDQwNy4wMzUwNjIsODkuNjMyNjc0NSA0MjguNjQ1MDI5LDgyLjk0NjcwMjQgQzQyNS42OTU2MDEsNDcuMjQwNDI2OSA0MjguNDgwNTkxLDI2LjA2MDE2MzUgNDM3LDE5LjQwNTkxMjQgTDM3MC4wMTIwNjUsMCBaIiBpZD0iUGF0aC00LUNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkxLjAwMDAwMCwgNDUuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zOTEuMDAwMDAwLCAtNDUuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NDYuMDY1NTQsNDQ2Ljc4MzQ1NiBDNTA2LjM4OTI4MSw0NDYuMjcyNzg3IDQ2My45MDEwODIsNDQ1LjIyMTk4NiA0MTkuNTc4NTE5LDQ0NC42OTk3MTQgQzM4Ni45NzE2MzEsNDQ0LjMxNTQ5MyAzNTMuMzMyNDc1LDQ0NS44NTAyNDEgMzE0LjgyMTI1NSw0NDcuMDQ2OTIgQzMxNy44NDUxNzEsNDg2Ljc5NjkyMSAzMTcuNjUyNTYyLDUxNC4wMDExMjUgMzE0LjI0MzQyNSw1MjguNjU5NTMyIEMyODguNzY4MzUsNTUxLjk1MTU5MiAyMzkuNDUyNTM2LDU0Mi43NzEyMDcgMjE3LjAyNDEwMiw1MjguNjU5NTMyIEMyMTkuMzc0OTkyLDUxMy4wNjA5NzggMjIzLjcyMTU0Myw0ODYuMjgxMjA0IDIzMC4wNjM3NTYsNDQ4LjMyMDIwOSBDMTk5LjAyOCw0NDguMTQ3NTk3IDE2NC43MTIwNTcsNDQ3LjE2MTI0NSAxMjUuOTkwNjY2LDQ0NC42OTk3MTQgQzk5LjczNzMzOTcsNDQzLjAzMDc4MiAzOS4wMzY2Nzg0LDQzNi41ODUzMzYgMTkuNTQyOTE3Niw0MjQuOTU0Nzg3IEMwLjA0OTE1NjczMjYsNDEzLjMyNDIzOCAwLjA0OTE1NjczMjYsNDEzLjMyNDIzOCAwLjA0OTE1NjczMjYsNDA2LjkxMDcxNCBDMC4wNDkxNTY3MzI2LDQwMC40OTcxODkgLTEuOTQ5NTcwNzUsMzk0LjUxMjg5MyAxOS41NDI5MTc2LDM4Ny44MzExMDUgQzQxLjAzNTQwNTksMzgxLjE0OTMxNiA5Ny4xODk2ODc5LDM4MS4yNzQ2NjggMTM3LjU0NzIwMSwzNjQuMTY0MDE5IEMxNzcuOTA0NzE1LDM0Ny4wNTMzNzEgMjM3LjUwODg2MSwzMTMuNTQ1Mjk5IDI2MS45MjYwODQsMjg1LjA2NjI3IEMzNTQuMjM0MTQzLDE3Ny40MDI3NjIgNDEzLjMzNjE4OSwxNDYuOTA3NzA5IDQ2NC4yNjkxNzQsMTQyLjUwNTc0OSBDNTMxLjA3MTc3LDEzNi43MzIyMzQgNTg0LjAwNTI3NywxODEuMjU2NTExIDY0MC40MzUzMzgsMjMxLjc4OTk0NSBDNjcxLjA0NDc3NSwyNTkuMjAwODY1IDcxMS41Nzg3NDMsMzE4LjI2Mjg0NyA3MzguMTIxNjA3LDMxMi4yNTg0NjkgQzc4OC42NjU3NjEsMzAwLjgyNDY1MyA4MDkuNzE0NzA2LDI3OC42ODM3NjMgODQ0LjEyNjI2MywyNjYuMDc0NDE2IEM4NzQuOTE0NjY2LDI1NC43OTI2OTMgOTIyLjgxMjYwNSwyMzUuMTM4ODA3IDk1OS4yMjI0MzksMjU3Ljk3NDI0NCBDOTk1LjYzMjI3NCwyODAuODA5NjgyIDEwNTkuNDQxODIsMzE3LjQ2Mzg0NSAxMDUzLjYyODU4LDM1Ny44MTUwNDQgQzEwNDMuMTE3MDIsNDMwLjc3ODQ1NCA5MTUuMzMyNTk5LDM4OC45NjkwNTMgODY0LjcwODM2OSwzODcuODMxMTA1IEM4MjkuNjQ1NjY3LDM4Ny4wNDI5NTMgODIwLjgzOTk0LDQxNC4xODA4NzMgNzQ3LjYzMjE5OSw0MzMuNTM0MTcyIEM3MTcuOTQwNzI0LDQ0MS4zODM0NTIgNjgwLjc1MzA1LDQ0NC45NjYxMzcgNjM3Ljk1NjExMyw0NDYuMzQ0OTc5IEM2NDguMjEyNjg3LDQ3OC40Mjk3MzEgNjUxLjUyNDIzNyw1MTQuMzUzNDU3IDY0Ny42NTMwMzEsNTMxLjkxOTA1NCBDNjMwLjg0MTg5Nyw1NTEuMzk5MzQxIDU3OC4zMTIzMzUsNTQxLjExODYyNiA1NTMuNjEwNzA4LDUzMS45MTkwNTQgQzU1Ni43Mzg5LDQ4Ni4zMzMwMiA1NTQuMjIzODQ1LDQ1Ny45NTQ0ODcgNTQ2LjA2NTU0LDQ0Ni43ODM0NTYgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjQTBCNjg4Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC1Db3B5LTIiIHN0cm9rZT0iIzk3OTc5NyIgZmlsbD0iIzVENUQ1RCIgY3g9IjkyNiIgY3k9IjI5OCIgcng9IjI3IiByeT0iNDIiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzguMDAwMDAwLCAwLjAwMDAwMCkiIGZpbGw9IiM4QjY4NEUiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NTEuMjMxMDY0LDI5NC42MTUyMTMgQzU3OS40NTYxNDgsMjgzLjM4NDI2OSA1OTMuNTY4NjksMjc3Ljc2ODc5NyA1OTMuNTY4NjksMjc3Ljc2ODc5NyBDNTk3LjY1MzM2NSwyNDcuNzU0NDI2IDU5OS42OTU3MDMsMjMyLjc0NzI0MSA1OTkuNjk1NzAzLDIzMi43NDcyNDEgQzU1OS45NzQ0MzUsMjE1LjMzODgxMyA1NDAuMTEzOCwyMDYuNjM0NiA1NDAuMTEzOCwyMDYuNjM0NiBMNTE4LjgyOTk1OCwyNzAuNDgxNzEgTDU1MS4yMzEwNjQsMjk0LjYxNTIxMyBaIiBpZD0iUGF0aC0yLUNvcHktMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1OS4yNjI4MzEsIDI1MC42MjQ5MDYpIHJvdGF0ZSg2NC4wMDAwMDApIHRyYW5zbGF0ZSgtNTU5LjI2MjgzMSwgLTI1MC42MjQ5MDYpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00NTguMjU1ODkxLDIwNC41OTQ4NDQgQzQ5My4xMTI2NjYsMTkyLjM0MjY4IDUxMC41NDEwNTMsMTg2LjIxNjU5OCA1MTAuNTQxMDUzLDE4Ni4yMTY1OTggQzUxNS41ODU0NTMsMTUzLjQ3MzA0NyA1MTguMTA3NjUyLDEzNy4xMDEyNzEgNTE4LjEwNzY1MiwxMzcuMTAxMjcxIEM0NjkuMDUzNTgxLDExOC4xMDk5MTEgNDQ0LjUyNjU0NSwxMDguNjE0MjMgNDQ0LjUyNjU0NSwxMDguNjE0MjMgTDQxOC4yNDE5MDcsMTc4LjI2NjkwMiBMNDU4LjI1NTg5MSwyMDQuNTk0ODQ0IFoiIGlkPSJQYXRoLTItQ29weS0zMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDY4LjE3NDc4MCwgMTU2LjYwNDUzNykgcm90YXRlKDU0LjAwMDAwMCkgdHJhbnNsYXRlKC00NjguMTc0NzgwLCAtMTU2LjYwNDUzNykgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwNi4xODEwNzMsMTgyLjEyOTY1NCBDMzU3Ljc5MTU5MiwxNjEuNTgwMDc4IDM4My41OTY4NTEsMTUxLjMwNTI5MSAzODMuNTk2ODUxLDE1MS4zMDUyOTEgQzM5MS4wNjU4MTgsOTYuMzg3MTQ4NyAzOTQuODAwMzAxLDY4LjkyODA3NzcgMzk0LjgwMDMwMSw2OC45MjgwNzc3IEMzMjIuMTY4NjIxLDM3LjA3NTM4NiAyODUuODUyNzgxLDIxLjE0OTA0MDEgMjg1Ljg1Mjc4MSwyMS4xNDkwNDAxIEwyNDYuOTM0NTU2LDEzNy45NzE5MDEgTDMwNi4xODEwNzMsMTgyLjEyOTY1NCBaIiBpZD0iUGF0aC0yLUNvcHktMjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyMC44Njc0MjksIDEwMS42MzkzNDcpIHJvdGF0ZSgyMS4wMDAwMDApIHRyYW5zbGF0ZSgtMzIwLjg2NzQyOSwgLTEwMS42MzkzNDcpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODIuMTYwMjg0LDIyOS44NDYwNDIgQzIxMC4zODUzNjgsMjE3LjU5Mzg3OSAyMjQuNDk3OTEsMjExLjQ2Nzc5NyAyMjQuNDk3OTEsMjExLjQ2Nzc5NyBDMjI4LjU4MjU4NiwxNzguNzI0MjQ2IDIzMC42MjQ5MjMsMTYyLjM1MjQ3IDIzMC42MjQ5MjMsMTYyLjM1MjQ3IEMxOTAuOTAzNjU1LDE0My4zNjExMDkgMTcxLjA0MzAyMSwxMzMuODY1NDI5IDE3MS4wNDMwMjEsMTMzLjg2NTQyOSBMMTQ5Ljc1OTE3OCwyMDMuNTE4MTAxIEwxODIuMTYwMjg0LDIyOS44NDYwNDIgWiIgaWQ9IlBhdGgtMi1Db3B5LTI3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTAuMTkyMDUxLCAxODEuODU1NzM2KSByb3RhdGUoLTEzLjAwMDAwMCkgdHJhbnNsYXRlKC0xOTAuMTkyMDUxLCAtMTgxLjg1NTczNikgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTk3LjczMTg4NjksMzA0LjIzMTA5MSBDMTI4LjQwMDIyNSwyOTEuOTc4OTI3IDE0My43MzQzOTQsMjg1Ljg1Mjg0NiAxNDMuNzM0Mzk0LDI4NS44NTI4NDYgQzE0OC4xNzI2NTIsMjUzLjEwOTI5NCAxNTAuMzkxNzgxLDIzNi43Mzc1MTkgMTUwLjM5MTc4MSwyMzYuNzM3NTE5IEMxMDcuMjMyMTEyLDIxNy43NDYxNTggODUuNjUyMjc2OSwyMDguMjUwNDc4IDg1LjY1MjI3NjksMjA4LjI1MDQ3OCBMNjIuNTI2MDM2MywyNzcuOTAzMTUgTDk3LjczMTg4NjksMzA0LjIzMTA5MSBaIiBpZD0iUGF0aC0yLUNvcHktMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNi40NTg5MDksIDI1Ni4yNDA3ODUpIHJvdGF0ZSgtMTYuMDAwMDAwKSB0cmFuc2xhdGUoLTEwNi40NTg5MDksIC0yNTYuMjQwNzg1KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjcuNjQ2NzY2LDM1OCBDNTEuNzMwMjczNiwzNDguNjgxMzY5IDYzLjc3MjAyNzQsMzQ0LjAyMjA1MyA2My43NzIwMjc0LDM0NC4wMjIwNTMgQzY3LjI1NzM0MjUsMzE5LjExODI4MiA2OSwzMDYuNjY2Mzk2IDY5LDMwNi42NjYzOTYgQzM1LjEwNzE4NzcsMjkyLjIyMjEzMiAxOC4xNjA3ODE1LDI4NSAxOC4xNjA3ODE1LDI4NSBMMCwzMzcuOTc1NzUxIEwyNy42NDY3NjYsMzU4IFoiIGlkPSJQYXRoLTItQ29weS0zNSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMzU4LjAwMDAwMCkiIGZpbGw9IiNCRTZDNjUiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIHBvaW50cz0iMTIuMTAwODc5MiAzOCAwIDAgMzAgMzgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBwb2ludHM9IjMwIDMxIDMwIDggNDEgMzEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
`

const Footer = props => {
    return (
        <>
            <FooterTop />
            <FooterStyled>
                <ContainerPadded>
                    <div css={tw`flex flex-wrap`}>
                        <div css={tw`w-full md:w-1/2 mb-8`}>
                            <small
                                css={tw`block text-base text-center md:text-left`}
                            >
                                &copy; Seb Toombs
                            </small>
                        </div>
                        <div css={tw`w-full md:w-1/2 mb-4`}>
                            <span css={tw`block font-medium text-lg mb-2`}>
                                <span css={tw`border-b-2 border-white`}>
                                    Get in touch
                                </span>
                            </span>
                            <ContactTable>
                                <tbody>
                                    <tr>
                                        <td>
                                            <FaEnvelope />
                                        </td>
                                        <td>Send me an email:</td>
                                        <td>
                                            <ProtectedLink
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                href="mailto:seb@sebtoombs.com?subject=Hey seb!&body=Hey Seb, I'd like to work with you...&utm_source=website&utm_medium=click_email&utm_campaign=footer"
                                            >
                                                seb@sebtoombs.com
                                            </ProtectedLink>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FaTwitter />
                                        </td>
                                        <td>Twitter:</td>
                                        <td>
                                            <a
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                href="https://twitter.com/baffledbasti"
                                            >
                                                @sebtoombs
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </ContactTable>
                        </div>
                    </div>

                    <div css={tw`text-right mt-16`}>
                        <FooterStego />
                    </div>
                </ContainerPadded>
            </FooterStyled>
        </>
    )
}
export default Footer
