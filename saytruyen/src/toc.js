function execute(url) {
    url = url.replace("saytruyen.net", "saytruyen.tv");
    url = url.replace("saytruyen.tv", "saytruyenvip.com");

    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        let el = doc.select(".list-chapter .list-item > li").select("a");
        const data = [];
        for (let i = el.size() - 1; i >= 0; i--) {
            let e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://saytruyenvip.com"
            })
        }

        return Response.success(data);
    }
    return null;
}