const authorName = document.querySelector('.author-name');
const quoteText = document.querySelector('.quote q');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let type = '';

document.addEventListener('DOMContentLoaded', () => {

    // function generateQuote(type) {
    //     // const url = `https://api.api-ninjas.com/v1/quotes?${type ? `tags=${type}` : ''}`;
    //     const url = `https://api.api-ninjas.com/v1/quotes?${type ? `tags=${type}&limit=1` : ''}`;

    //     fetch(url)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`API request failed with status code ${response.status}`);
    //               }
    //               return response.json();
    //             }
    //         )
    //         .then(data => {
    //             // authorName.textContent = data[0].author;
    //             // quoteText.textContent = data[0].quote;
    //             if (data.length > 0 && data[0].author && data[0].quote) {
    //                 authorName.textContent = data[0].author;
    //                 quoteText.textContent = data[0].quote;
    //               } else {
    //                 authorName.textContent = 'Error';
    //                 quoteText.textContent = 'Failed to fetch quote';
    //               }
    //             console.log(data);
    //         })
    //         .catch(err => {
    //             console.log("Failed to fetch quote: ", err);
    //         });
    // }


    async function generateQuote(newType = '') {
        // type is either an empty "" or filled one

        type = newType || 'famous';
        try {
        const url = `https://api.api-ninjas.com/v1/quotes?tags=${type}`;
          const response = await axios.get(url, {
            headers: {
              'X-Api-Key': 'DrRIL43C3yk0K7xypAyDwA==DVeDLorlRFb33vyv'
            }
          });

          if (response.data.length > 0 && response.data[0].author && response.data[0].quote) {
            authorName.textContent = response.data[0].author;
            quoteText.textContent = response.data[0].quote;
          } else {
            authorName.textContent = 'Error';
            quoteText.textContent = 'Failed to fetch quote';
          }
        } catch (error) {
          console.log("Failed to fetch quote: ", error);
          authorName.textContent = 'Error';
          quoteText.textContent = 'Failed to fetch quote';
        }
      }


    // async function generateQuote() {
    //     // type is either an empty "" or filled one
    //     try {
    //       const url = `https://api.api-ninjas.com/v1/quotes?${type ? `tags=${type}` : ''}`;
    //       const response = await axios.get(url, {
    //         headers: {
    //           'X-Api-Key': 'DrRIL43C3yk0K7xypAyDwA==DVeDLorlRFb33vyv'
    //         }
    //       });

    //       if (response.data.length > 0 && response.data[0].author && response.data[0].quote) {
    //         authorName.textContent = response.data[0].author;
    //         quoteText.textContent = response.data[0].quote;
    //       } else {
    //         authorName.textContent = 'Error';
    //         quoteText.textContent = 'Failed to fetch quote';
    //       }
    //     } catch (error) {
    //       console.log("Failed to fetch quote: ", error);
    //       authorName.textContent = 'Error';
    //       quoteText.textContent = 'Failed to fetch quote';
    //     }
    //   }


    btn1.addEventListener('click', () => generateQuote('famous'));
    btn2.addEventListener('click', () => generateQuote('inspirational'));

    
    //   generate random whenever quote when page loads
    generateQuote();
});


  // function copyToClipboard() {
  //   const quoteUrl = `https://api-ninjas.com/quotes?tags=${type}`;
  //   navigator.clipboard.writeText(quoteUrl)
  //     .then(() => {
  //       console.log(quoteUrl);
  //       // alert(`Quote URL copied to clipboard:\n${quoteUrl}`);
  //     })
  //     .catch((error) => {
  //       console.error('Failed to copy text: ', error);
  //       alert('Failed to copy quote URL to clipboard');
  //     });
  // }


//   function shareQuote() {
//     // const quoteText = document.querySelector('.quote q').textContent;
//     // const authorName = document.querySelector('.author-name').textContent;
//     const shareText = `"${quoteText}" - ${authorName}`;

//     // Share on Twitter
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
//     window.open(twitterUrl, '_blank');

//     // Share on Facebook
//     const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
//     window.open(facebookUrl, '_blank');

//     // Share on LinkedIn
//     const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(shareText)}`;
//     window.open(linkedinUrl, '_blank');

//     // Share on WhatsApp
//     const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
//     window.open(whatsappUrl, '_blank');
//   }


//   dialog for choosing platforms to share
  function showShareDialog() {
    document.getElementById('shareDialog').style.display = 'block';
    //   document.querySelector('.overlay').style.display = 'block';
  }

  function hideShareDialog() {
    document.getElementById('shareDialog').style.display = 'none';
    //   document.querySelector('.overlay').style.display = 'none';
  }

  function shareOnPlatform(platform) {
    // const quoteText = document.querySelector('.quote q').textContent;
    // const authorName = document.querySelector('.author-name').textContent;
    const shareText = `"${quoteText}" - ${authorName}`;

    switch (platform) {
      case 'twitter':
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(twitterUrl, '_blank');
        break;
      case 'facebook':
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(facebookUrl, '_blank');
        break;
      case 'linkedin':
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(shareText)}`;
        window.open(linkedinUrl, '_blank');
        break;
      case 'whatsapp':
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappUrl, '_blank');
        break;
    }

    hideShareDialog();
  }



  // cloning the generated quote's  url
  function cloneUrl() {
    const originalUrl = `https://api-ninjas.com/quotes?tags=${type}`;
    const clonedUrl = `${originalUrl}`;
  
    navigator.clipboard.writeText(clonedUrl)
      .then(() => {
        console.log(`Cloned URL: ${clonedUrl}`);
        // alert(`Cloned URL copied to clipboard:\n${clonedUrl}`);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
        alert('Failed to clone URL');
      });
  }