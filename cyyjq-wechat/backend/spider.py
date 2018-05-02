# coding=utf-8
import requests
from lxml import etree

user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
headers = {"User-Agent": user_agent}  # 请求头,headers是一个字典类型

html = requests.get('http://www.chancheng.gov.cn/jiaoyu/jy010201/list_index.shtml', headers=headers).content

selector = etree.HTML(html)

divs = selector.xpath('//div[@class="listindex"]//li/div/a')

print(len(divs))

for div in divs:
    title = div.get('title')
    print(title)
    href = div.get('href')
    print('http://www.chancheng.gov.cn' + href)
