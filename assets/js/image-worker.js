onmessage = async (e) => {

    const { data, start, end } = e.data;
    const urls = [];

    for( let i = start; i <= end; i++ ) {
        if( data[i] ) {
            urls.push(data[i].image_url)
        }
    }

    const images = await Promise.all(
        urls.map(async url => {
            try {
                const response = await fetch(url);
                const fileBlob = await response.blob();
                if (fileBlob.type === "image/webp" || fileBlob.type === 'image/jpeg' || fileBlob.type === 'image/png') {
                    return URL.createObjectURL(fileBlob);
                }
            } catch (e) {
                return null;
            }
        })
    );

    self.postMessage(images);

};