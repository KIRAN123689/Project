import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, X, Filter } from "lucide-react";
import { players, teams, Player } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PlayerSearchCommandProps {
  onSelectPlayer: (player: Player) => void;
  selectedTeam?: string;
}

export function PlayerSearchCommand({ onSelectPlayer, selectedTeam = "all" }: PlayerSearchCommandProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const roles = useMemo(() => {
    const uniqueRoles = [...new Set(players.map(p => p.role))];
    return uniqueRoles;
  }, []);

  const filteredPlayers = useMemo(() => {
    return players.filter(player => {
      const matchesSearch = 
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.nationality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTeam = selectedTeam === "all" || player.team === selectedTeam;
      const matchesRole = roleFilter === "all" || player.role === roleFilter;
      return matchesSearch && matchesTeam && matchesRole;
    });
  }, [searchQuery, selectedTeam, roleFilter]);

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search players by name, role, or nationality..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (e.target.value) setIsExpanded(true);
          }}
          onFocus={() => setIsExpanded(true)}
          className="pl-11 pr-10 h-12 bg-secondary border-border focus:border-primary text-base"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={() => {
              setSearchQuery("");
              setIsExpanded(false);
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mt-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Filter:</span>
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-40 h-9 bg-secondary border-border">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            {roles.map(role => (
              <SelectItem key={role} value={role}>{role}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Badge variant="secondary" className="ml-auto">
          {filteredPlayers.length} players found
        </Badge>
      </div>

      {/* Results */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 max-h-[400px] overflow-y-auto rounded-xl border border-border bg-card"
          >
            {filteredPlayers.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <User className="w-10 h-10 mx-auto mb-3 opacity-50" />
                <p>No players found matching your criteria</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {filteredPlayers.map((player, index) => {
                  const team = teams.find(t => t.id === player.team);
                  return (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="p-3 hover:bg-secondary/50 cursor-pointer transition-colors flex items-center gap-4"
                      onClick={() => {
                        onSelectPlayer(player);
                        setIsExpanded(false);
                      }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ backgroundColor: `${team?.primaryColor}20`, color: team?.primaryColor }}
                      >
                        {player.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{player.name}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{team?.shortName}</span>
                          <span>•</span>
                          <span>{player.role}</span>
                          <span>•</span>
                          <span>{player.nationality}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-medium">{player.stats.totalRuns} runs</div>
                        <div className="text-muted-foreground">{player.stats.wicketsTaken} wkts</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Stats */}
      {!isExpanded && (
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="p-3 rounded-lg bg-secondary/50 text-center">
            <div className="text-2xl font-bold text-primary">{players.length}</div>
            <div className="text-xs text-muted-foreground">Total Players</div>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 text-center">
            <div className="text-2xl font-bold text-accent">{players.filter(p => p.role.includes('Batsman')).length}</div>
            <div className="text-xs text-muted-foreground">Batsmen</div>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 text-center">
            <div className="text-2xl font-bold text-success">{players.filter(p => p.role === 'Bowler').length}</div>
            <div className="text-xs text-muted-foreground">Bowlers</div>
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 text-center">
            <div className="text-2xl font-bold">{players.filter(p => p.role === 'All-rounder').length}</div>
            <div className="text-xs text-muted-foreground">All-rounders</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}