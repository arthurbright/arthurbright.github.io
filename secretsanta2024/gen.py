import random

# non-edges
no = {}
no["alexc"] = ["kirsten", "frank", "lavan"]
no["alexh"] = ["jennifer", "alexc", "chris"]
no["arthur"] = ["jennifer", "kevin"]
no["chris"] = ["felix", "edward"]
no["edward"] = ["alexh", "alexc"]
no["felix"] = ["lavan"]
no["frank"] = ["arthur", "alexh"]
no["jennifer"] = ["alexh", "kirsten"]
no["kevin"] = ["arthur", "chris"]
no["kirsten"] = ["alexc", "jennifer", "kevin"]
no["lavan"] = ["frank", "edward"]
no["selina"] = []

people = ["alexc", "alexh", "arthur", "chris", "edward", "frank", "jennifer", "kevin", "kirsten", "lavan"]
people_og = people.copy()
assert(len(people) == 10)
num = len(people)

while True:
    random.shuffle(people)
    good = True
    for i in range(num):
        if people[(i + 1) % num] in no[people[i]]:
            good = False
            break
    if good:
        break

print(people)
gift_to = {}
for i in range(num):
    gift_to[people[i]] = people_og.index(people[(i + 1) % num])

print(gift_to)



