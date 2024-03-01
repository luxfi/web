# Bullion Data and Data generation

#### The Lux Bullion products are specified [here](https://docs.google.com/document/d/1d-aWwd2ijz8o6UT2MxtFY_RRfR18CjbSgdIKhN0qdV8)

This document species the way SKUs correspond to those products so that
the commerce ui can set up searches by categories. 

The Hanzo SKUs are correspond as follows.  This allows for 
easy implementation of search categories.

### SKU Tokens for Bullion

Category: 'All'
```
First token:
LXB       'Lux Bullion'  
```


Category: 'Type'
```
Second token:
AU        'Lux Gold Bullion'
AG        'Lux Silver Bullion'
PD        'Lux Palladium Bullion'
PT        'Lux Platinum Bullion'
```


Category: 'Form'
``` 
third token:
B         'Minted Bar'
C         'Coin'
CB        'Cast bar'
```

Category: 'Size'
```
forth / last token:
<integer>-<unit> 
eg: 100-OZ    '100oz'
```

'Size' Variant: Fractional values 
```
Decimal point is replaced with '_'
eg: 2_5-G = '2.5g'
```

Full examples:
```
LXB-AU-B-50-G     'Lux Gold Bullion, 50g Minted Bar'           
LXB-AU-B-2_5-G    'Lux Gold Bullion, 2.5g Minted Bar'
LXB-AU-B-10-OZ    'Lux Gold Bullion, 10oz Minted Bar'
LXB-AG-CB-500-G   'Lux Silver Bullion, 500g Cast Bar'
LXB-PT-C-1-OZ     'Lux Platinum Bullion, 1oz Minted Coin'
```

