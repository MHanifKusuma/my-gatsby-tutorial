import React from 'react'
import Layout from '../components/layout'
import * as styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is Blog Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi massa, volutpat vitae massa ac, molestie auctor erat. Pellentesque volutpat felis nec mauris pulvinar pharetra. Aenean posuere sed est eu tristique. Sed a dolor eu purus malesuada luctus. Donec non lorem condimentum, varius mi id, elementum elit. Cras ac consectetur erat. Quisque cursus nulla magna, a interdum nulla sagittis sed. Proin laoreet urna a odio finibus rutrum. Aliquam lobortis diam non urna accumsan, vitae interdum nulla pellentesque.
                </p>
                <p>
                    Cras feugiat eget sapien at bibendum. Aenean accumsan, sem nec eleifend dictum, lacus velit venenatis velit, ut lacinia ante elit non orci. Fusce placerat ultricies elit vitae semper. Donec luctus tincidunt sapien, et semper nisl varius sed. In risus nisi, sollicitudin quis augue ut, mollis varius ipsum. Aenean quis urna ullamcorper, luctus odio sed, dapibus tortor. Etiam efficitur ipsum lectus, nec porttitor tellus blandit non. Nunc imperdiet, lectus in placerat ultricies, nisi lectus molestie erat, sit amet luctus tortor est eu metus. Fusce diam quam, aliquam nec ex eu, cursus pharetra erat. Fusce dignissim pellentesque nibh sed finibus. Aenean eget convallis nibh. Nulla posuere ullamcorper dictum. Etiam pretium pellentesque libero, ac faucibus velit volutpat et. Praesent viverra, mi id iaculis viverra, lorem neque ultricies mi, ut pulvinar dui nunc ut est.
                </p>
            </div>
        </Layout>
    )
}

export default blog
