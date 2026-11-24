import { UserRound } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/agencyData';
import {
  AmbientGlow,
  Reveal,
  SectionDivider,
  SectionKicker,
  StaggerGroup,
  StaggerItem,
} from './MotionPrimitives';

export function TeamSection() {
  return (
    <>
      <section id="team" className="relative overflow-hidden bg-[#F2EFE9]/55 py-16 sm:py-20 lg:py-24">
        <AmbientGlow tone="light" position="top-right" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <SectionKicker>Meet Our Team</SectionKicker>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
              style={{ textWrap: 'balance' }}
            >
              Five Dedicated Specialists Behind Your Growth
            </h2>
            <p className="mt-4 text-base text-[#354740] leading-relaxed">
              Our Addis Ababa team brings together strategy, custom web engineering, Google Maps visibility, video
              production, creative scriptwriting, and client partnerships under one roof.
            </p>
          </Reveal>

          {/* 5 Individual Profile Cards with Avatar Placeholders Ready for Real Photos */}
          <StaggerGroup className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.id} className="h-full">
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <SectionDivider variant="light" />
    </>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      className={`flex flex-col justify-between h-full rounded-2xl p-6 sm:p-8 border transition-all duration-200 hover:-translate-y-1 ${
        member.isFounder
          ? 'bg-[#0B3B2D] text-[#FAF9F6] border-[#D4AF37]/50 hover:border-[#D4AF37] hover:shadow-[0_22px_48px_-16px_rgba(212,175,55,0.32)]'
          : 'bg-[#FFFFFF] text-[#111C18] border-[#0B3B2D]/12 hover:border-[#D4AF37]/70 hover:shadow-[0_18px_40px_-16px_rgba(11,59,45,0.16)]'
      }`}
    >
      <div>
        {/* Placeholder Avatar Header Ready for Real Team Photo */}
        <div className="flex items-center gap-4 mb-6">
          <div
            role="img"
            aria-label={`Photo avatar placeholder for ${member.name}`}
            className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center border shrink-0 ${
              member.isFounder
                ? 'bg-[#07261D] border-[#D4AF37]/50 text-[#D4AF37]'
                : 'bg-[#FAF9F6] border-[#0B3B2D]/20 text-[#0B3B2D]'
            }`}
          >
            <UserRound className="w-7 h-7" aria-hidden="true" />
            <span className="mt-1 font-display text-xs font-bold tracking-wider">
              {member.initials}
            </span>
          </div>

          <div>
            <p
              className={`text-xs font-medium ${
                member.isFounder ? 'text-[#D4AF37]' : 'text-[#4A5C54]'
              }`}
            >
              {member.isFounder ? 'Collective Leadership · Photo Placeholder' : 'Photo Placeholder'}
            </p>
            <h3
              className={`mt-0.5 font-display text-xl sm:text-2xl font-bold tracking-tight ${
                member.isFounder ? 'text-[#FAF9F6]' : 'text-[#0B3B2D]'
              }`}
            >
              {member.name}
            </h3>
            <p
              className={`mt-0.5 text-sm font-medium leading-snug ${
                member.isFounder ? 'text-[#D4AF37]' : 'text-[#82640C]'
              }`}
            >
              {member.role}
            </p>
          </div>
        </div>

        <p
          className={`text-sm leading-relaxed ${
            member.isFounder ? 'text-[#DCE6E1]' : 'text-[#354740]'
          }`}
        >
          {member.bio}
        </p>
      </div>

      {/* Skills as clean unboxed typographic list */}
      <div
        className={`mt-6 pt-5 border-t ${
          member.isFounder ? 'border-white/15' : 'border-[#0B3B2D]/10'
        }`}
      >
        <p
          className={`text-xs font-semibold mb-1.5 ${
            member.isFounder ? 'text-[#D4AF37]' : 'text-[#4A5C54]'
          }`}
        >
          Core Specialties
        </p>
        <p
          className={`text-sm font-medium leading-relaxed ${
            member.isFounder ? 'text-[#FAF9F6]/90' : 'text-[#0B3B2D]'
          }`}
        >
          {member.skills.join(' · ')}
        </p>
      </div>
    </article>
  );
}
