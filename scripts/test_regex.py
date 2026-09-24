# -*- coding: utf-8 -*-
"""
Full dataset builder for 120 TOEIC SW translation items.
Adds 12 new items to each of the 5 parts (total 60 existing + 60 new = 120 items).
"""

import re
import json

with open('src/data/translationData.ts', 'r', encoding='utf-8') as f:
    raw_content = f.read()

# Let's extract existing items by slicing the array
# We can match each item object block in TRANSLATION_BANK
# Each item starts with `  {` and ends with `  },` or `  }`
# Let's verify by regex:
pattern = re.compile(r'  \{\s+id:\s*\'([^\']+)\'[\s\S]+?\n  \},?', re.MULTILINE)
matches = pattern.findall(raw_content)
print("Regex found matched blocks:", len(matches))
