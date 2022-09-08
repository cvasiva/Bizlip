import React from 'react';


const Pagenation = ({ data, pageHandler }) => {
    let pageNumers = []
    for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
        pageNumers.push(i);
    }
    return (
        <div>
            <nav aria-label="...">
                <ul class="pagination">
                    {pageNumers.map(page => <li className='page-item'><a onClick={() => pageHandler(page)} haef='!# ' className='page-link'>{page}</a></li>)}

                </ul>
            </nav>
        </div>
    )
}

export default Pagenation
