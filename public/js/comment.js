const comment = async (e) => {

    e.preventDefault();
    const userComment = document.getElementById('comment-Input').value;
    const response = await fetch('/newcomment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            comment: userComment || '',
            blog_id: document.getElementById("post-Id").dataset.value
        })
    });
    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to post comment');
    }
}

document.querySelector('#submit-Btn').addEventListener('click', comment);
